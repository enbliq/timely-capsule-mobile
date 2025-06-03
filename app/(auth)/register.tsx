import Spacer from "@/components/Spacer";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import FormInput from "../../components/FormInput";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [walletId, setWalletId] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // handle login logic here
    console.log("Logging in with", { email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
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
              <Text style={styles.title}>Create new account</Text>
              <Spacer height={10} />

              <Text style={styles.subtitle}>
                Welcome! Please enter your details
              </Text>
            </View>
          </View>

          {/*form input fields  */}

          <View>
            <FormInput
              label="Full Name"
              placeholder="John Doe"
              value={fullName}
              onChangeText={setFullName}
            />

            <FormInput
              label="Email"
              placeholder="johnDoe@gmail.com"
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <FormInput
              label="Confirm Password"
              placeholder="••••••••"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <View style={styles.walletContainer}>
              <Text style={styles.label}>Wallet Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder=" "
                  placeholderTextColor="#9CA3AF"
                  editable={false}
                  value={walletId}
                  onChange={(e) => setWalletId(e.nativeEvent.text)}
                />
                <Pressable>
                  <Text style={styles.connectText}>Connect Wallet</Text>
                </Pressable>
              </View>
            </View>
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
            <Text style={styles.loginText}>Create Account</Text>
          </Pressable>

          {/* Footer: Sign up link */}
          <View style={styles.footer}>
            <Text style={styles.accountText}>Already have an account? </Text>
            <View style={styles.footerSignupText}>
              <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text style={styles.signupText}>Login</Text>
                <Svg
                  width={65}
                  height={15}
                  viewBox="10 0 150 20"
                  style={{ transform: [{ rotate: "360deg" }] }}
                >
                  <Path
                    d="M10 10 Q 60 -10 110 10"
                    stroke="#48BB78"
                    strokeWidth={4}
                    fill="none"
                    strokeLinecap="round"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "300",
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
    backgroundColor: "#215537",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
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

  //   wallet input styles
  walletContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  connectText: {
    color: "#22C55E",
    fontWeight: "600",
    textDecorationLine: "underline",
    marginLeft: 12,
  },
});
