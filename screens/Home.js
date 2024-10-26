import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen ({navigation}) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.inputText}>Bem-Vindo(a) ao App!</Text>
      <Text style={styles.inputText}>Escolha uma opção:</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('IMC')}>
          <Text style={styles.loginText}>Calcular IMC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Medidas')}>
          <Text style={styles.loginText}>Conversão de Medidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Moeda')}>
          <Text style={styles.loginText}>Conversão de Moeda</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    height: 50,
    color: 'black',
    flex: 1,
    borderColor: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText : {
    color: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#f5f5dc',
  },
});