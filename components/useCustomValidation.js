//Validaciones
import { useState } from 'react';

const useCustomValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let error = '';

    switch (field) {
      case 'nombre':
      case 'apellido':
      case 'nacionalidad':
        if (!value.trim()) {
          error = `${field} es obligatorio`;
        }
        break;
      case 'cedula':
        if (!value.trim() || value.length < 7) {
          error = 'Cédula no válida';
        }
        break;
      case 'telefono':
        if (!value.trim() || value.length < 10) {
          error = 'Número de teléfono no válido';
        }
        break;
      case 'correo':
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(value)) {
          error = 'Correo electrónico no válido';
        }
        break;
      case 'password':
        const passwordErrors = validatePassword(value);
        if (passwordErrors.length > 0) {
          error = passwordErrors.join(' / ');  
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return error;
  };

  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: '',
    }));
  };

  return { errors, validate, clearError };
};

const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < 8) {
    errors.push('La contraseña debe tener al menos 8 caracteres');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('La contraseña debe contener al menos una letra mayúscula');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('La contraseña debe contener al menos una letra minúscula');
  }
  
  if (!/\d/.test(password)) {
    errors.push('La contraseña debe contener al menos un número');
  }
  
  if (!/[@$!%*?&]/.test(password)) {
    errors.push('La contraseña debe contener al menos un carácter especial');
  }

  return errors;
};

export default useCustomValidation;
//©NathanMendoza ©R3DV1

