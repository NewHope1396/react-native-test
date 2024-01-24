import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Platform,
  Pressable,
  Alert,
} from "react-native";
import BMW from "./assets/thumbnail_260x462.jpg";

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <ImageBackground source={BMW} style={styles.bgImg}>
      <View style={styles.container}>
        <View style={styles.textBlock}>
          <Text style={styles.text}>Та ну нафіг О_о</Text>
          <Text style={styles.secondText}>А шо, так можна було?</Text>
        </View>
        <View style={styles.formBlock}>
          <Text style={styles.formTitle}>Типу форма</Text>
          <TextInput
            value={message}
            onChangeText={(text) => {
              setMessage(text);
            }}
            secureTextEntry
            style={styles.input}
          />
          <Pressable
            onPress={(e) => {
              Alert.alert(message);
              setMessage("");
            }}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Вже кнопка</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  bgImg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 24,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
    color: "blue",
    backgroundColor: "yellow",
    padding: 24,
    width: "100%",
    textAlign: "center",
  },
  secondText: {
    fontSize: 24,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
    color: "yellow",
    padding: 24,
    backgroundColor: "blue",
    width: "100%",
    textAlign: "center",
  },
  textBlock: {
    width: "100%",
    borderBlockColor: "black",
    borderWidth: 5,
    marginBottom: 40,
  },
  formBlock: {
    width: "100%",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 10,
    padding: 24,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    fontSize: 24,
    padding: 12,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 5,
    textAlign: "center",
  },
  formTitle: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: "700",
  },
  btn: {
    marginTop: 24,
    padding: 12,
    borderRadius: 10,
    ...Platform.select({
      web: {
        backgroundColor: "yellow",
      },
      android: {
        backgroundColor: "blue",
      },
    }),
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    ...Platform.select({
      web: {
        color: "blue",
      },
      android: {
        color: "yellow",
      },
    }),
  },
});
