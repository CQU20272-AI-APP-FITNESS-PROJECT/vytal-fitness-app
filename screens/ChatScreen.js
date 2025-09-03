import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
  const [activeTab, setActiveTab] = useState('Workout');

  const workoutContent = (
    <>
      <View style={styles.userMessageContainer}>
        <Text style={styles.messageText}>Give me a quick 15-minute HIIT workout for today.</Text>
      </View>
      <View style={styles.aiMessageContainer}>
        <Text style={[styles.messageText, styles.aiMessageText, {fontWeight: 'bold'}]}>Of course! Here's a 15-Min HIIT Routine:</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Jumping Jacks (60s)</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Rest (30s)</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- High Knees (60s)</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Rest (30s)</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Burpees (60s)</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Repeat 3 times! 🔥</Text>
      </View>
    </>
  );

  const lifestyleContent = (
    <>
      <View style={styles.userMessageContainer}>
        <Text style={styles.messageText}>What are some healthy snack ideas?</Text>
      </View>
      <View style={styles.aiMessageContainer}>
        <Text style={[styles.messageText, styles.aiMessageText, {fontWeight: 'bold'}]}>Great question! Try these:</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Greek yogurt with berries</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- A handful of almonds</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Apple slices with peanut butter</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>- Hard-boiled eggs</Text>
        <Text style={[styles.messageText, styles.aiMessageText]}>Enjoy!</Text>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Assistant</Text>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity 
          style={[styles.toggleButton, activeTab === 'Workout' && styles.activeToggleButton]}
          onPress={() => setActiveTab('Workout')}
        >
          <Text style={[styles.toggleText, activeTab === 'Workout' && styles.activeToggleText]}>Workout Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.toggleButton, activeTab === 'Lifestyle' && styles.activeToggleButton]}
          onPress={() => setActiveTab('Lifestyle')}
        >
          <Text style={[styles.toggleText, activeTab === 'Lifestyle' && styles.activeToggleText]}>Lifestyle Tips</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.chatArea}>
        {activeTab === 'Workout' ? workoutContent : lifestyleContent}
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.inputContainer}
        keyboardVerticalOffset={90}
      >
        <TextInput
          style={styles.input}
          placeholder="Ask Vytal.AI anything..."
          placeholderTextColor={COLORS.gray}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  activeToggleButton: {
    backgroundColor: COLORS.primary,
  },
  toggleText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  activeToggleText: {
    color: COLORS.white,
  },
  chatArea: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  userMessageContainer: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 20,
    borderBottomRightRadius: 5,
    alignSelf: 'flex-end',
    maxWidth: '80%',
    marginBottom: 15,
  },
  aiMessageContainer: {
    backgroundColor: COLORS.lightGray,
    padding: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 5,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    marginBottom: 15,
  },
  messageText: {
    fontSize: 16,
    color: COLORS.white,
  },
  aiMessageText: {
    color: COLORS.dark,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default ChatScreen;