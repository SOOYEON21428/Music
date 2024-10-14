import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>필가이드</Text>
      <Text style={styles.subtitle}>PREP LAB</Text>
      <View style={styles.buttonContainer}>
        <Button title="이메일로 시작하기" onPress={() => {}} color="#80b393" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#80b393',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});