import Spacer from "@/components/Spacer";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FormInput from "../../components/FormInput";

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          <Text style={styles.title}>Reset Password</Text>
          <Spacer height={10} />
        </View>
      </View>
      <Spacer />

      {/*form input fields  */}
      <View>
        <FormInput
          label="Password"
          placeholder="••••••"
          value={password}
          onChangeText={setPassword}
        />
        <Spacer height={30} />
        <FormInput
          label="Confirm Password"
          placeholder="••••••"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <Spacer height={13} />

      {/* Login Button */}
      <Pressable style={styles.loginButton}>
        <Text style={styles.loginText}>Done</Text>
      </Pressable>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  logo: {
    width: 80,
    height: 80,
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
