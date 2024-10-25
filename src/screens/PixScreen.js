// PixScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useTransactions } from "../components/transactionContext";

const PixScreen = ({ navigation }) => {
  const [pixKey, setPixKey] = useState("");
  const [pixValue, setPixValue] = useState("");
  const { addTransaction } = useTransactions();

  const handlePixTransfer = () => {
    if (pixValue && pixKey) {
      const transaction = {
        id: Date.now().toString(), // Identificador único
        key: pixKey,
        amount: parseFloat(pixValue),
        date: new Date().toLocaleString(), // Data e hora da transação
      };

      addTransaction(transaction); // Adiciona a transação ao contexto

      Alert.alert("Pix realizado!", `Chave: ${pixKey}\nValor: R$${pixValue}`);
      navigation.navigate("Home", { newSaldo: parseFloat(pixValue) });
    } else {
      Alert.alert("Erro", "Por favor, insira todos os dados");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Escolha uma chave Pix:
      </Text>
      <TextInput
        placeholder="Insira a chave Pix"
        value={pixKey}
        onChangeText={setPixKey}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />

      <Text style={{ fontSize: 18, marginBottom: 10 }}>Valor:</Text>
      <TextInput
        placeholder="Insira o valor"
        value={pixValue}
        onChangeText={setPixValue}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handlePixTransfer}
        style={{ padding: 15, backgroundColor: "#00A884", borderRadius: 5 }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
          Enviar Pix
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PixScreen;
