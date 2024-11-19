// ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';
import Button from './Button';
import useCustomValidation from './useCustomValidation';
import axios from 'axios';

const ForgotPasswordScreen = () => {
  const { errors, validate } = useCustomValidation();
  const [correo, setCorreo] = useState('');

  const handleSubmit = async () => {
    const error = validate('correo', correo);
    if (!error) {
      try {
        await axios.post('https://example.com/forgot-password', { correo });
        alert('Se ha enviado un correo para la recuperación de la contraseña');
      } catch (error) {
        alert('Hubo un error al recuperar la contraseña');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <Input
        label="Correo"
        value={correo}
        onChangeText={setCorreo}
        placeholder="Introduce tu correo"
        error={errors.correo}
      />
      <Button title="Recuperar" onPress={handleSubmit} disabled={!!errors.correo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;
//©NathanMendoza ©R3DV1

