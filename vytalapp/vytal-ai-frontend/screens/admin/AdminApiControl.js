import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Alert, Modal, TextInput, Button, ScrollView } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import apiClient from '../../api/client';
import { useFocusEffect } from '@react-navigation/native';

const AdminManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: null, name: '', imageUrl: '', category: 'fitness', price: '', purchaseLink: '' });

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get('/admin/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchProducts();
    }, [])
  );
  
  const openNewModal = () => {
    setIsEditing(false);
    setCurrentProduct({ id: null, name: '', imageUrl: '', category: 'fitness', price: '', purchaseLink: '' });
    setModalVisible(true);
  };

  const openEditModal = (product) => {
    setIsEditing(true);
    setCurrentProduct({ ...product, price: product.price.toString() });
    setModalVisible(true);
  };

  const handleDelete = (product) => {
    Alert.alert(
      "Delete Product",
      `Are you sure you want to delete ${product.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteProduct(product.id) }
      ]
    );
  };

  const deleteProduct = async (productId) => {
    try {
      await apiClient.delete(`/admin/products/${productId}`);
      fetchProducts();
    } catch (error) {
      Alert.alert("Error", "Failed to delete product.");
    }
  };

  const handleSave = async () => {
    if (!currentProduct.name || !currentProduct.price || !currentProduct.imageUrl || !currentProduct.purchaseLink || !currentProduct.category) {
        Alert.alert("Error", "Please fill all fields.");
        return;
    }
    const productData = { ...currentProduct, price: parseFloat(currentProduct.price) };

    try {
      if (isEditing) {
        await apiClient.put(`/admin/products/${currentProduct.id}`, productData);
      } else {
        await apiClient.post('/admin/products', productData);
      }
      fetchProducts();
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Error", "Failed to save product.");
    }
  };

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>${item.price} - {item.category}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => openEditModal(item)}>
          <Ionicons name="pencil-outline" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleDelete(item)}>
          <Ionicons name="trash-outline" size={22} color={COLORS.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={openNewModal}>
          <Ionicons name="add" size={30} color={COLORS.white} />
      </TouchableOpacity>
      
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No products created yet. Tap the '+' to add one.</Text>}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent} keyboardShouldPersistTaps="handled">
                <Text style={styles.modalTitle}>{isEditing ? 'Edit Product' : 'Add New Product'}</Text>
                <Text style={styles.label}>Product Name</Text>
                <TextInput style={styles.input} placeholder="e.g., Smart Watch" value={currentProduct.name} onChangeText={text => setCurrentProduct({...currentProduct, name: text})} />
                
                <Text style={styles.label}>Image URL</Text>
                <TextInput style={styles.input} placeholder="https://example.com/image.png" value={currentProduct.imageUrl} onChangeText={text => setCurrentProduct({...currentProduct, imageUrl: text})} />

                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input} placeholder="e.g., 129.99" keyboardType="numeric" value={currentProduct.price} onChangeText={text => setCurrentProduct({...currentProduct, price: text})} />
                
                <Text style={styles.label}>Purchase Link (URL)</Text>
                {/* --- THIS IS THE FIXED LINE --- */}
                <TextInput style={styles.input} placeholder="https://buy.example.com/product" value={currentProduct.purchaseLink} onChangeText={text => setCurrentProduct({...currentProduct, purchaseLink: text})} />
                
                <Text style={styles.label}>Category</Text>
                <TextInput style={styles.input} placeholder="fitness, weight, diet, or others" value={currentProduct.category} onChangeText={text => setCurrentProduct({...currentProduct, category: text})} />

                <View style={styles.buttonRow}>
                    <Button title="Cancel" onPress={() => setModalVisible(false)} color={COLORS.gray} />
                    <Button title="Save Product" onPress={handleSave} />
                </View>
            </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.lightGray },
    listContainer: { padding: 20 },
    card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.white, padding: 20, borderRadius: 12, marginBottom: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
    cardTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.dark },
    cardSubtitle: { fontSize: 14, color: COLORS.gray, marginTop: 4 },
    actions: { flexDirection: 'row' },
    actionButton: { marginLeft: 20, padding: 5 },
    emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: COLORS.gray },
    fab: { position: 'absolute', bottom: 30, right: 30, width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', zIndex: 1, elevation: 8 },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { width: '90%', maxHeight: '80%', backgroundColor: COLORS.white, borderRadius: 10, padding: 20 },
    modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    label: { fontSize: 14, fontWeight: '600', color: COLORS.dark, marginBottom: 5, marginLeft: 2 },
    input: { borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#F9FAFB', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
    buttonRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, paddingBottom: 20 },
});

export default AdminManageProducts;