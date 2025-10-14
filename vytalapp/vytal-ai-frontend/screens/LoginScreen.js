import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';
import { AuthContext } from '../context/AuthContext';
import api from '../api/client';

const LoginScreen = ({ navigation }) => {
  const { signIn, login: adminLogin } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdminLogin = async () => {
    const result = await adminLogin('admin@vytal.ai', 'adminpass');
    if (!result.success) {
      Alert.alert("Login Failed", result.message);
    }
  };

  const handleSendOtp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      await api.post('/auth/login', { email, password });
      setShowOtpInput(true);
    } catch (error) {
      Alert.alert("Error", error.response?.data?.msg || "An unexpected error occurred.");
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      Alert.alert("Error", "Please enter the 6-digit OTP from your email.");
      return;
    }
    setLoading(true);
    try {
      const response = await api.post('/auth/verify-otp', { email, otp });
      signIn(response.data);
    } catch (error) {
      Alert.alert("Verification Failed", error.response?.data?.msg || "An unexpected error occurred.");
    }
    setLoading(false);
  };

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.formContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.freepik.com/512/12133/12133562.png' }} style={styles.logo} />
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

        {!showOtpInput ? (
          <>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder="user@vytal.ai"
              placeholderTextColor={COLORS.gray}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              editable={!loading}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor={COLORS.gray}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              editable={!loading}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleSendOtp} disabled={loading}>
              {loading ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.loginButtonText}>Send OTP to Login</Text>}
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.otpMessage}>An OTP has been sent to {email}. Please check your inbox.</Text>
            <Text style={styles.label}>One-Time Password (OTP)</Text>
            <TextInput
              style={styles.input}
              placeholder="123456"
              placeholderTextColor={COLORS.gray}
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
              maxLength={6}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleVerifyOtp} disabled={loading}>
              {loading ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.loginButtonText}>Verify & Login</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowOtpInput(false)}>
              <Text style={styles.forgotPasswordText}>Go Back</Text>
            </TouchableOpacity>
          </>
        )}

        {!showOtpInput && (
          <>
            {/* <TouchableOpacity style={styles.adminLoginButton} onPress={handleAdminLogin}>
              <Text style={styles.adminLoginButtonText}>Login as Admin</Text>
            </TouchableOpacity> */}
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  formContainer: { width: '90%', backgroundColor: COLORS.white, borderRadius: 20, padding: 25, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  logo: { width: 60, height: 60, marginBottom: 8 },
  title: { fontSize: 28, fontWeight: 'bold', color: COLORS.dark, marginBottom: 20 },
  toggleContainer: { flexDirection: 'row', marginBottom: 25, backgroundColor: COLORS.lightGray, borderRadius: 10, padding: 4 },
  toggleButton: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  activeToggleButton: { backgroundColor: COLORS.primary },
  toggleText: { fontSize: 16, color: COLORS.gray, fontWeight: '600' },
  activeToggleText: { fontSize: 16, color: COLORS.white, fontWeight: '600' },
  label: { alignSelf: 'flex-start', fontSize: 14, color: COLORS.gray, marginBottom: 8 },
  input: { width: '100%', height: 50, backgroundColor: COLORS.white, borderRadius: 10, borderWidth: 1, borderColor: '#E5E7EB', paddingHorizontal: 15, fontSize: 16, marginBottom: 15 },
  loginButton: { width: '100%', backgroundColor: COLORS.primary, paddingVertical: 15, borderRadius: 10, alignItems: 'center', marginTop: 10, height: 55, justifyContent: 'center' },
  loginButtonText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  adminLoginButton: { width: '100%', backgroundColor: COLORS.lightGray, paddingVertical: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  adminLoginButtonText: { color: COLORS.dark, fontSize: 16, fontWeight: '600' },
  forgotPasswordText: { fontSize: 14, color: COLORS.primary, fontWeight: '600', marginTop: 20 },
  otpMessage: { fontSize: 14, color: COLORS.dark, textAlign: 'center', marginBottom: 15 },
});

export default LoginScreen;