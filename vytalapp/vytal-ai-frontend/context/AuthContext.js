import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../api/client';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { token, user: userData } = response.data;

      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      setUser(userData);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error.response?.data?.msg || error.message);
      return { success: false, message: error.response?.data?.msg || 'An error occurred' };
    }
  };

  const signIn = async (data) => {
    try {
      if (data && data.token && data.user) {
        await AsyncStorage.setItem('userToken', data.token);
        await AsyncStorage.setItem('userData', JSON.stringify(data.user));
        setUser(data.user);
        setIsLoggedIn(true);
      } else {
        throw new Error("Invalid sign-in data provided.");
      }
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  };

  const signup = async (fullName, email, password) => {
     try {
        await apiClient.post('/auth/register', { fullName, email, password });
        return { success: true };
     } catch (error) {
        console.error("Signup failed:", error.response?.data?.msg || error.message);
        return { success: false, message: error.response?.data?.msg || 'An error occurred' };
     }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userData');
    setUser(null);
    setIsLoggedIn(false);
  };

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const userDataString = await AsyncStorage.getItem('userData');
      if (token && userDataString) {
        setUser(JSON.parse(userDataString));
        setIsLoggedIn(true);
      }
    } catch (e) {
      console.error("Failed to check login status", e);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (isLoading) {
      return null;
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, signup, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};