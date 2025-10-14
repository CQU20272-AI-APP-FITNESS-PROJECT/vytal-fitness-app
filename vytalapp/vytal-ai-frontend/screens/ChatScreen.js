import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, ActivityIndicator, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import apiClient from '../api/client';
import { AuthContext } from '../context/AuthContext';

const PlanGeneratorScreen = () => {
  const { user } = useContext(AuthContext);

  const [goal, setGoal] = useState(user?.primaryGoal || '');
  const [availableDays, setAvailableDays] = useState('');
  const [timePerDay, setTimePerDay] = useState('');
  
  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGeneratePlan = async () => {
    Keyboard.dismiss();
    if (!goal || !availableDays || !timePerDay) {
      setError("Please fill in all fields to generate a plan.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setPlan(null);

    try {
      const response = await apiClient.post('/ai/generate-plan', { goal, availableDays, timePerDay });
      setPlan(response.data);
    } catch (err) {
      console.error("Failed to fetch plan:", err);
      setError("Could not generate a plan. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Plan Generator</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
            <Text style={styles.label}>What is your primary fitness goal?</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g., Build muscle, lose weight"
                value={goal}
                onChangeText={setGoal}
            />
            <Text style={styles.label}>What days can you work out?</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g., Monday, Wednesday, Friday"
                value={availableDays}
                onChangeText={setAvailableDays}
            />
            <Text style={styles.label}>How much time do you have per session?</Text>
            <TextInput
                style={styles.input}
                placeholder="e.g., 30 minutes, 1 hour"
                value={timePerDay}
                onChangeText={setTimePerDay}
            />
            <TouchableOpacity style={styles.generateButton} onPress={handleGeneratePlan} disabled={isLoading}>
                {isLoading ? (
                    <ActivityIndicator color={COLORS.white} />
                ) : (
                    <Text style={styles.generateButtonText}>Generate My Plan</Text>
                )}
            </TouchableOpacity>
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {plan && (
            <View style={styles.planContainer}>
                <Text style={styles.planTitle}>{plan.planTitle}</Text>
                {plan.days.map((dayData, index) => (
                    <View key={index} style={styles.dayCard}>
                        <Text style={styles.dayHeader}>{dayData.day}: {dayData.focus}</Text>
                        {dayData.exercises.map((exercise, exIndex) => (
                            <View key={exIndex} style={styles.exerciseContainer}>
                                <Text style={styles.exerciseName}>{exercise.name}</Text>
                                <Text style={styles.exerciseDetails}>{exercise.details}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  header: { paddingVertical: 20, paddingHorizontal: 20, alignItems: 'center', backgroundColor: COLORS.white, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark },
  contentContainer: { padding: 20 },
  formContainer: { backgroundColor: COLORS.white, padding: 20, borderRadius: 15, marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', color: COLORS.dark, marginBottom: 8 },
  input: { backgroundColor: '#F9FAFB', borderRadius: 10, padding: 15, fontSize: 16, marginBottom: 15, borderWidth: 1, borderColor: '#E5E7EB' },
  generateButton: { backgroundColor: COLORS.primary, paddingVertical: 15, borderRadius: 10, alignItems: 'center', marginTop: 5 },
  generateButtonText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
  errorText: { fontSize: 16, color: COLORS.danger, textAlign: 'center', marginVertical: 15 },
  planContainer: { marginTop: 10 },
  planTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark, marginBottom: 20, textAlign: 'center' },
  dayCard: { backgroundColor: COLORS.white, borderRadius: 15, padding: 20, marginBottom: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3.84, elevation: 5 },
  dayHeader: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginBottom: 15, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray, paddingBottom: 10 },
  exerciseContainer: { marginBottom: 10 },
  exerciseName: { fontSize: 16, fontWeight: '600', color: COLORS.dark },
  exerciseDetails: { fontSize: 14, color: COLORS.gray, marginLeft: 5 },
});

export default PlanGeneratorScreen;