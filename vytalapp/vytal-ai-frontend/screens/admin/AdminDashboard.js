import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../api/client';
import { useFocusEffect } from '@react-navigation/native';

const DashboardCard = ({ icon, title, value, color }) => (
  <View style={styles.card}>
    <Ionicons name={icon} size={32} color={color} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

const AdminDashboard = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [metrics, setMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMetrics = async () => {
    try {
      const response = await apiClient.get('/admin/metrics');
      setMetrics(response.data);
    } catch (error) { console.error("Failed to fetch metrics:", error); } 
    finally { setIsLoading(false); }
  };
  
  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      fetchMetrics();
    }, [])
  );

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.cardGrid}>
          <DashboardCard icon="people" title="Total Users" value={metrics?.totalUsers} color={COLORS.primary} />
          <DashboardCard icon="chatbubbles" title="API Usage" value={metrics?.apiUsage} color={COLORS.success} />
          <DashboardCard icon="storefront" title="Total Products" value={metrics?.totalProducts} color="#F59E0B" />
          <DashboardCard icon="trending-up" title="Clicks" value={metrics?.sales} color={COLORS.danger} />
        </View>

        <Text style={styles.sectionTitle}>Management</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AdminManageUsers')}>
          <Ionicons name="people-circle-outline" size={24} color={COLORS.dark} />
          <Text style={styles.menuItemText}>Manage Users</Text>
          <Ionicons name="chevron-forward-outline" size={24} color={COLORS.gray} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AdminApiControl')}>
          <Ionicons name="options-outline" size={24} color={COLORS.dark} />
          <Text style={styles.menuItemText}>Manage Products</Text>
          <Ionicons name="chevron-forward-outline" size={24} color={COLORS.gray} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AdminCharts')}>
          <Ionicons name="analytics-outline" size={24} color={COLORS.dark} />
          <Text style={styles.menuItemText}>View Analytics Charts</Text>
          <Ionicons name="chevron-forward-outline" size={24} color={COLORS.gray} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Ionicons name="log-out-outline" size={22} color={COLORS.white} />
            <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightGray, },
  content: { padding: 20, },
  cardGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', },
  card: { backgroundColor: COLORS.white, borderRadius: 15, padding: 20, width: '48%', marginBottom: 15, alignItems: 'center', },
  cardTitle: { fontSize: 16, color: COLORS.gray, marginTop: 10, },
  cardValue: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark, marginTop: 5, },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark, marginTop: 20, marginBottom: 15, },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: 20, borderRadius: 10, marginBottom: 10, },
  menuItemText: { flex: 1, fontSize: 18, marginLeft: 15, color: COLORS.dark, },
  logoutButton: { flexDirection: 'row', backgroundColor: COLORS.danger, padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 30, },
  logoutButtonText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold', marginLeft: 10, },
});

export default AdminDashboard;