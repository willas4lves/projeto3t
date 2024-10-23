// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Importando os ícones

const HomeScreen = ({ route }) => {
    
  const [saldo, setSaldo] = useState(4000); // Saldo inicial
  const navigation = useNavigation();

  // Atualiza saldo após Pix, se houver
  if (route.params && route.params.newSaldo) {
    setSaldo(saldo - route.params.newSaldo);
    route.params.newSaldo = null; // Evita o loop de atualização
  }

  const handlePixPress = () => {
    navigation.navigate("Pix");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5", padding: 16 }}>
      <StatusBar backgroundColor="#00A884" barStyle="light-content" />

      <View
        style={{ backgroundColor: "#00A884", padding: 20, borderRadius: 10 }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Saldo em conta</Text>
        <Text style={{ color: "#fff", fontSize: 28 }}>
          R$ {saldo.toFixed(2)}
        </Text>
        <Text style={{ color: "#fff", marginTop: 10 }}>
          Rendendo 102% do CDI
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 20 }}
      >
        {[
          { id: "1", name: "Pix", icon: "payments", onPress: handlePixPress },
          { id: "2", name: "Pagar boleto", icon: "receipt" },
          { id: "3", name: "Cofrinhos", icon: "savings" },
          { id: "4", name: "Adicionar cartão", icon: "credit-card" },
        ].map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={item.onPress}
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: 20,
              backgroundColor: "#fff",
              marginHorizontal: 10,
              borderRadius: 4,
              width: 100, 
              height: 100,
            }}
          >
            <Icon
              name={item.icon}
              size={30}
              color="#00A884"
              style={{ marginBottom: 10 }}
            />
            <Text style={{ fontSize: 14 }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={[
          { id: "1", name: "Cartão de credito", icon: "credit-card" },
          { id: "2", name: "Emprestismo", icon: "attach-money" },
          { id: "3", name: "Investimento", icon: "trending-up" },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={item.onPress}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15,
              backgroundColor: "#fff",
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Icon
              name={item.icon}
              size={24}
              color="#00A884"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
