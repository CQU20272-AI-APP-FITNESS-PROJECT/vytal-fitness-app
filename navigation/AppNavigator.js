import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import StoreScreen from '../screens/StoreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AdminDashboard from '../screens/admin/AdminDashboard';
import AdminManageUsers from '../screens/admin/AdminManageUsers';
import AdminApiControl from '../screens/admin/AdminApiControl';

import { COLORS } from '../constants/colors';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);

const MainTabNavigator = () => (
  <MainTab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'AI') {
          iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
        } else if (route.name === 'Store') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.gray,
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
        backgroundColor: COLORS.white,
        paddingBottom: 5,
        height: 60,
      },
    })}
  >
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="AI" component={ChatScreen} />
    <MainTab.Screen name="Store" component={StoreScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);


const AppNavigator = () => {
    const { isLoggedIn, userRole } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <AppStack.Navigator 
                  initialRouteName={userRole === 'admin' ? 'AdminDashboard' : 'Main'}
                >
                    <AppStack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }}/>
                    <AppStack.Screen name="AdminDashboard" component={AdminDashboard} options={{ title: 'Admin Dashboard' }}/>
                    <AppStack.Screen name="AdminManageUsers" component={AdminManageUsers} options={{ title: 'Manage Users' }}/>
                    <AppStack.Screen name="AdminApiControl" component={AdminApiControl} options={{ title: 'API Control' }}/>
                </AppStack.Navigator>
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    );
};

export default AppNavigator;