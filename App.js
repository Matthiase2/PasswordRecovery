

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('');

  
  const handlePasswordRecovery = () => {
   
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

   
    Alert.alert('Success', 'Password recovery instructions have been sent to your email.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Password Recovery</Text>

     
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      
      <Button title="Recover Password" onPress={handlePasswordRecovery} />

      
      <Text style={styles.backToLogin}>
        Remember your password? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
  },
  backToLogin: {
    marginTop: 20,
    textAlign: 'center',
  },
  loginLink: {
    color: 'blue',
  },
});

export default PasswordRecoveryScreen;
