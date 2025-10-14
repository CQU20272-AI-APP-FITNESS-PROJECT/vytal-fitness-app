import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image, Alert } from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

const QuickActionButton = ({ icon, label, onPress, iconSet }) => {
  const IconComponent = iconSet === 'Material' ? MaterialCommunityIcons : iconSet === 'FontAwesome' ? FontAwesome5 : Ionicons;
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <IconComponent name={icon} size={30} color={COLORS.primary} />
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>{user?.fullName.split(' ')[0]}</Text>
        </View>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5951/5951752.png' }} style={styles.profilePic} />
      </View>

      <View style={styles.content}>
        <View style={styles.goalCard}>
          <Text style={styles.goalTitle}>Today's Goal</Text>
          <Text style={styles.goalDescription}>Complete a 30-minute cardio session and log your meals.</Text>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>
        </View>

        <Text style={styles.quickActionsTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <QuickActionButton icon="sparkles" label="AI Plans" onPress={() => navigation.navigate('AI')} />
          <QuickActionButton iconSet="Material" icon="storefront-outline" label="Store" onPress={() => navigation.navigate('Store')} />
          <QuickActionButton icon="person-outline" label="Profile" onPress={() => navigation.navigate('Profile')} />
          <QuickActionButton iconSet="FontAwesome" icon="clipboard-check" label="Log Activity" onPress={() => Alert.alert('Feature Coming Soon', 'This feature is not yet implemented.')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10, backgroundColor: '#F0F2F5' },
  welcomeText: { fontSize: 24, color: COLORS.dark },
  userName: { fontSize: 30, fontWeight: 'bold', color: COLORS.dark },
  profilePic: { width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.lightGray },
  content: { paddingHorizontal: 20 },
  goalCard: { backgroundColor: COLORS.primary, borderRadius: 15, padding: 20, marginTop: 20 },
  goalTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.white },
  goalDescription: { fontSize: 16, color: COLORS.white, marginTop: 5, marginBottom: 15 },
  progressBarBackground: { height: 10, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 5 },
  progressBarFill: { height: '100%', width: '60%', backgroundColor: COLORS.white, borderRadius: 5 },
  quickActionsTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark, marginTop: 30, marginBottom: 15 },
  actionsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  actionButton: { width: '48%', backgroundColor: COLORS.white, borderRadius: 15, padding: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 15, height: 120, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3.84, elevation: 2 },
  actionLabel: { fontSize: 16, fontWeight: '600', color: COLORS.dark, marginTop: 10 },
});

export default HomeScreen;