
// App.js
import React from 'react';
import { View, Text } from 'react-native';
import RegisterScreen from  './components/RegisterScreen'; // o usa ForgotPasswordScreen si quieres la recuperación

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <RegisterScreen /> 
    </View>
  );
}

//©NathanMendoza ©R3DV1
