// registro
import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Input from './Input'; 
import Button from './Button'; 
import useCustomValidation from './useCustomValidation'; 
import axios from 'axios'; 

const RegisterScreen = () => {
  const { errors, validate, clearError } = useCustomValidation();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    telefono: '',
    nacionalidad: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
    clearError(field); 
  };

  const handleSubmit = async () => {
    // Validar todos los campos
    const isValid =
      !Object.keys(form).some((key) => validate(key, form[key])); 

    if (isValid) {
      try {
      
        const response = await axios.post('https://example.com/register', form);
        alert('Registro exitoso');
      } catch (error) {
        alert('Error al registrar el usuario');
      }
    } else {
      alert('Por favor corrige los errores');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      
      <Input
        label="Nombre"
        value={form.nombre}
        onChangeText={(value) => handleInputChange('nombre', value)}
        placeholder="Introduce tu nombre"
        error={errors.nombre}
      />
      <Input
        label="Apellido"
        value={form.apellido}
        onChangeText={(value) => handleInputChange('apellido', value)}
        placeholder="Introduce tu apellido"
        error={errors.apellido}
      />
      <Input
        label="Cédula"
        value={form.cedula}
        onChangeText={(value) => handleInputChange('cedula', value)}
        placeholder="Introduce tu cédula"
        error={errors.cedula}
      />
      <Input
        label="Correo"
        value={form.correo}
        onChangeText={(value) => handleInputChange('correo', value)}
        placeholder="Introduce tu correo electrónico"
        error={errors.correo}
      />
      <Input
        label="Teléfono"
        value={form.telefono}
        onChangeText={(value) => handleInputChange('telefono', value)}
        placeholder="Introduce tu teléfono"
        error={errors.telefono}
      />
      <Input
        label="Nacionalidad"
        value={form.nacionalidad}
        onChangeText={(value) => handleInputChange('nacionalidad', value)}
        placeholder="Introduce tu nacionalidad"
        error={errors.nacionalidad}
      />
      
      {/* Campo de contraseña */}
      <Input
        label="Contraseña"
        value={form.password}
        onChangeText={(value) => handleInputChange('password', value)}
        placeholder="Introduce tu contraseña"
        secureTextEntry={true} // Hace el texto de la contraseña oculto
        error={errors.password}
      />
      
      <Button title="Registrar" onPress={handleSubmit} disabled={Object.values(errors).some((e) => e)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#00B391',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});

export default RegisterScreen;
//©NathanMendoza ©R3DV1

