import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert, ActivityIndicator, Image } from 'react-native';
import { COLORS } from '../constants/colors';
import { AuthContext } from '../context/AuthContext';
import apiClient from '../api/client';

const ProfileScreen = () => {
  const { logout, user } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiClient.get('/users/me');
        setFullName(response.data.fullName);
        setPrimaryGoal(response.data.primaryGoal);
      } catch (error) {
        Alert.alert("Error", "Could not fetch profile data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSaveChanges = async () => {
    try {
      await apiClient.put('/users/me', { fullName, primaryGoal });
      Alert.alert("Success", "Your profile has been updated.");
    } catch (error) {
      Alert.alert("Error", "Could not update profile.");
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>
      <View style={styles.profileIconContainer}>
        <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5951/5951752.png' }}
            style={styles.profileIcon}
        />
        <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editIconText}>✏️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={user?.email} editable={false} />

        <Text style={styles.label}>Primary Goal</Text>
        <TextInput style={styles.input} value={primaryGoal} onChangeText={setPrimaryGoal} placeholder="e.g., Gain Muscle"/>
        
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  centered: { justifyContent: 'center', alignItems: 'center' },
  header: { padding: 20, alignItems: 'center' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark },
  profileIconContainer: { alignItems: 'center', marginTop: 20, marginBottom: 30 },
  profileIcon: { width: 120, height: 120, borderRadius: 60, backgroundColor: COLORS.lightGray },
  editIcon: { position: 'absolute', bottom: 0, right: 120, backgroundColor: COLORS.white, borderRadius: 20, padding: 8, borderWidth: 1, borderColor: COLORS.lightGray },
  editIconText: { fontSize: 18 },
  form: { paddingHorizontal: 25 },
  label: { fontSize: 14, color: COLORS.gray, marginBottom: 8 },
  input: { width: '100%', height: 50, backgroundColor: COLORS.white, borderRadius: 10, borderWidth: 1, borderColor: '#E5E7EB', paddingHorizontal: 15, fontSize: 16, marginBottom: 20 },
  saveButton: { backgroundColor: COLORS.primary, paddingVertical: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  saveButtonText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  logoutButton: { backgroundColor: 'transparent', paddingVertical: 15, borderRadius: 10, alignItems: 'center', marginTop: 10, borderWidth: 1, borderColor: COLORS.danger },
  logoutButtonText: { color: COLORS.danger, fontSize: 18, fontWeight: 'bold' },
});

export default ProfileScreen;