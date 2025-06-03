import Spacer from "@/components/Spacer";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FormInput from "../../components/FormInput";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // handle login logic here
    console.log("Logging in with", { email });
  };

  return (
    <View style={styles.container}>
      {/* Login Header: Logo & welcome text */}
      <View>
        {/* logo */}
        <View>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../../assets/images/logoPng.png")}
          />
        </View>

        <View>
          <Text style={styles.title}>Forgot Password?</Text>
          <Spacer height={10} />

          <Text style={styles.subtitle}>
            Kindly enter the email address attached to your account.{" "}
          </Text>
        </View>
      </View>
      <Spacer />

      {/*form input fields  */}
      <View>
        <FormInput
          label="Email"
          placeholder="example@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <Spacer height={30} />
      </View>
      <Spacer height={13} />

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Submit</Text>
      </Pressable>
      <Spacer />
     
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#111827",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 24,
  },

  loginButton: {
    // backgroundColor: "linear-gradient(to right, #34D399, #065F46)", // replace with real gradient or use expo-linear-gradient
    backgroundColor: "#059669",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
