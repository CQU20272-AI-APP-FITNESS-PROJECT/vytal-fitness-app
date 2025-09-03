import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.formContainer}>
        <Image source={{ uri: 'https://i.imgur.com/T43j42W.png' }} style={styles.logo} />
        <Text style={styles.title}>Vytal.AI</Text>

        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.toggleButton, styles.activeToggleButton]}>
            <Text style={styles.activeToggleText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.toggleButton} 
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.toggleText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="user@vytal.ai"
          placeholderTextColor={COLORS.gray}
          keyboardType="email-address"
          defaultValue="user@vytal.ai"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={COLORS.gray}
          secureTextEntry
          defaultValue="password"
        />

        <TouchableOpacity style={styles.loginButton} onPress={() => login('user')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.adminLoginButton} onPress={() => login('admin')}>
          <Text style={styles.adminLoginButtonText}>Login as Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeToggleButton: {
    backgroundColor: COLORS.primary,
  },
  toggleText: {
    fontSize: 16,
    color: COLORS.gray,
    fontWeight: '600',
  },
  activeToggleText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '600',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  adminLoginButton: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  adminLoginButtonText: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
    marginTop: 20,
  },
});

export default LoginScreen;