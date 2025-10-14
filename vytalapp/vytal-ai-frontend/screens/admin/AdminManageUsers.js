import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, StatusBar, Alert, ActivityIndicator, Modal, TextInput, Button } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import apiClient from '../../api/client';
import { useFocusEffect } from '@react-navigation/native';

const AdminManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await apiClient.get('/admin/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      Alert.alert("Error", "Could not load user data.");
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      fetchUsers();
    }, [])
  );

  const openEditModal = (user) => {
    setCurrentUser(user);
    setModalVisible(true);
  };

  const handleSaveChanges = async () => {
    if (!currentUser) return;
    try {
      await apiClient.put(`/admin/users/${currentUser.id}`, {
        fullName: currentUser.fullName,
        role: currentUser.role,
      });
      setModalVisible(false);
      fetchUsers(); // Refresh list to show changes
    } catch (error) {
      Alert.alert("Error", "Failed to update user.");
    }
  };

  const handleDelete = (userId, userName) => {
    Alert.alert("Delete User", `Are you sure you want to delete ${userName}?`,
      [{ text: "Cancel", style: "cancel" }, { text: "Delete", style: "destructive", onPress: () => deleteUser(userId) }]
    );
  };

  const deleteUser = async (userId) => {
    try {
      await apiClient.delete(`/admin/users/${userId}`);
      fetchUsers();
    } catch (error) { Alert.alert("Error", "Failed to delete user."); }
  };

  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <View>
        <Text style={styles.userName}>{item.fullName}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => openEditModal(item)}>
          <Ionicons name="pencil-outline" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleDelete(item.id, item.fullName)}>
          <Ionicons name="trash-outline" size={22} color={COLORS.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (isLoading) {
    return (<SafeAreaView style={[styles.container, { justifyContent: 'center' }]}><ActivityIndicator size="large" color={COLORS.primary} /></SafeAreaView>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList data={users} renderItem={renderUser} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.listContainer} ListEmptyComponent={<Text style={styles.emptyText}>No users found.</Text>} />

      {currentUser && (
        <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit User</Text>
              <Text style={styles.label}>Full Name</Text>
              <TextInput style={styles.input} value={currentUser.fullName} onChangeText={text => setCurrentUser({ ...currentUser, fullName: text })} />
              
              <Text style={styles.label}>Role</Text>
              <TextInput style={styles.input} value={currentUser.role} onChangeText={text => setCurrentUser({ ...currentUser, role: text })} placeholder="user or admin" autoCapitalize="none" />
              
              <Text style={styles.emailText}>Email (cannot be changed): {currentUser.email}</Text>
              
              <View style={styles.buttonRow}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} color={COLORS.gray} />
                <Button title="Save Changes" onPress={handleSaveChanges} />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.lightGray },
    listContainer: { padding: 20 },
    userCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.white, padding: 20, borderRadius: 12, marginBottom: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
    userName: { fontSize: 16, fontWeight: 'bold', color: COLORS.dark },
    userEmail: { fontSize: 14, color: COLORS.gray, marginTop: 4 },
    actions: { flexDirection: 'row', alignItems: 'center' },
    actionButton: { marginLeft: 20, padding: 5 },
    emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: COLORS.gray },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { width: '90%', backgroundColor: COLORS.white, borderRadius: 10, padding: 20 },
    modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    label: { fontSize: 14, fontWeight: '600', color: COLORS.dark, marginBottom: 5, marginLeft: 2 },
    input: { borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#F9FAFB', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
    emailText: { fontSize: 14, color: COLORS.gray, textAlign: 'center', marginBottom: 20 },
    buttonRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
});

export default AdminManageUsers;