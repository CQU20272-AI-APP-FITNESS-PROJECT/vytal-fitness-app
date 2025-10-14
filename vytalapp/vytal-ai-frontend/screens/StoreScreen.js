import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/colors';
import ProductModal from '../components/ProductModal';
import apiClient from '../api/client';

const StoreScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => openModal(item)}>
      <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
      return (
          <SafeAreaView style={[styles.container, styles.centered]}>
              <ActivityIndicator size="large" color={COLORS.primary} />
          </SafeAreaView>
      )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Affiliate Store</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No products available right now.</Text>}
      />
      <ProductModal visible={modalVisible} product={selectedProduct} onClose={closeModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  centered: { justifyContent: 'center', alignItems: 'center' },
  header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark },
  listContainer: { padding: 10 },
  productCard: { flex: 1, margin: 10, backgroundColor: COLORS.white, borderRadius: 15, padding: 15, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 3 },
  imageContainer: { width: '100%', height: 120, backgroundColor: COLORS.lightGray, borderRadius: 10, marginBottom: 15, justifyContent: 'center', alignItems: 'center' },
  productImage: { width: 100, height: 100, resizeMode: 'contain' },
  productName: { fontSize: 16, fontWeight: 'bold', color: COLORS.dark, textAlign: 'center' },
  productPrice: { fontSize: 14, color: COLORS.primary, marginTop: 5 },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: COLORS.gray }
});

export default StoreScreen;