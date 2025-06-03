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
import Svg, { Path } from "react-native-svg";
import FormInput from "../../components/FormInput";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // handle login logic here
    console.log("Logging in with", { email, password });
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
          <Text style={styles.title}>Welcome back</Text>
          <Spacer height={10} />

          <Text style={styles.subtitle}>
            Welcome back! Please enter your details
          </Text>
        </View>
      </View>
      <Spacer />

      {/*form input fields  */}
      <View>
        <FormInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Spacer height={30} />

        <FormInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Spacer height={13} />

      {/* Remember me & Forgot password */}
      <View style={styles.row}>
        <Text style={styles.remember}>Remember for 30 Days</Text>
        <TouchableOpacity
          onPress={() => router.push("/(auth)/forgot-password")}
        >
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <Spacer height={30} />
      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Sign in</Text>
      </Pressable>

      {/* Footer: Sign up link */}
      <View style={styles.footer}>
        <Text style={styles.accountText}>Don’t have an account? </Text>
        <View style={styles.footerSignupText}>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text style={styles.signupText}>Sign up for free</Text>
            <Svg
              width={88}
              height={20}
              viewBox="0 0 120 20"
              style={{ transform: [{ rotate: "360deg" }] }} // Flip vertically
            >
              <Path
                d="M10 10 Q 60 -10 110 10"
                stroke="#22C55E"
                strokeWidth={4}
                fill="none"
                strokeLinecap="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  remember: {
    fontSize: 14,
    color: "#374151",
  },
  forgot: {
    fontSize: 14,
    color: "#374151",
    textDecorationLine: "underline",
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
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerSignupText: {
    position: "relative",
    alignItems: "center",
  },
  accountText: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  signupText: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "400",
  },
  underline: {
    position: "absolute",
    bottom: -2,
  },
});
