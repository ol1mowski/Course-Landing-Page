import crypto from 'crypto';

export const generateSecurePassword = () => {
  const length = 8;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  
  password += charset[crypto.randomInt(0, 26)];
  password += charset[crypto.randomInt(26, 52)];
  password += charset[crypto.randomInt(52, 62)];
  password += charset[crypto.randomInt(62, charset.length)];
  
  for (let i = 4; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset[randomIndex];
  }
  
  return password.split('').sort(() => 0.5 - Math.random()).join('');
}; 