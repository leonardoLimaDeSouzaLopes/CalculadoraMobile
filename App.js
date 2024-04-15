import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, CheckBox, Image, Picker, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [sinal, setSinal] = useState();
  const [resultado, setResultado] = useState();

  return (

    <View style={styles.body}>

      <StatusBar style="auto" />

      <View style={styles.container}>

        <Text style={styles.titulo}>Calculadora</Text>

        <TextInput style={styles.input}
          value={num1} onChangeText={(text) => setNum1(parseFloat(text))}
          placeholder={"Digite o Primeiro Numero"}
        />

        <Picker style={styles.picker} selectedValue={sinal} onValueChange={(itemValue, itemIndex) => setSinal(itemValue)}>
          <Picker.Item label="" value="" />
          <Picker.Item label="+" value="+" />
          <Picker.Item label="-" value="-" />
          <Picker.Item label="*" value="*" />
          <Picker.Item label="/" value="/" />
        </Picker>

        <TextInput style={styles.input}
          value={num2} onChangeText={(text) => setNum2(parseFloat(text))}
          placeholder={"Digite o Segundo Numero"}
        />

        <View style={styles.botao}>
          <Button
            title="Calcular"
            onPress={() => {
              switch (sinal) {
                case "+":
                  setResultado(num1 + num2);
                  break;
                case "-":
                  setResultado(num1 - num2);
                  break;
                case "*":
                  setResultado(num1 * num2)
                  break;
                case "/":
                  setResultado(num1 / num2)
                  break;
                default:
                  setResultado("Insira uma Operação")
              }
            }}
          />
        </View>

        <Text style={styles.texto}>{resultado}</Text>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    color: "#000",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: "50%",
  },
  texto: {
    fontSize: 20,
  },
  titulo: {
    fontSize: 30,
  },
  input: {
    color: "#404040",
    borderColor: "#808080",
    fontSize: 13,
    marginTop: 10,
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  picker: {
    color: "#404040",
    borderColor: "#808080",
    fontSize: 13,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#ff0000",
  },
});
