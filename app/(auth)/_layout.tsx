import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  // This layout is used for authentication-related screens
  return (
    <>
      <StatusBar style="dark" />
      {/* <Stack  /> */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default AuthLayout;
