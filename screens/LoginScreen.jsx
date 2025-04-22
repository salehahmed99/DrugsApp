import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Button
} from "react-native";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import FormElement from "../components/FormElement";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth-context";
import * as LocalAuthentication from "expo-local-authentication";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isFaceIDAvailable, setIsFaceIDAvailable] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     // Check if biometric hardware is available
  //     const compatible = await LocalAuthentication.hasHardwareAsync();
  //     setIsBiometricSupported(compatible);

  //     if (compatible) {
  //       // Check available authentication types
  //       const types =
  //         await LocalAuthentication.supportedAuthenticationTypesAsync();
  //       setIsFaceIDAvailable(
  //         types.includes(
  //           LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
  //         )
  //       );

  //       // Check if biometric data is enrolled
  //       const enrolled = await LocalAuthentication.isEnrolledAsync();
  //       setIsEnrolled(enrolled);
  //     }
  //   })();
  // }, []);

  const { login, isLoading } = useAuth();

  const onSubmit = async () => {
    if (email.trim().length == 0 || password.trim().length == 0) {
      Alert.alert("Login Error", "Please fill all the fields");
      return;
    }
    await login(email.trim(), password.trim());
  };

  const handleBiometricAuth = async () => {
    try {
      if (!isBiometricSupported || !isFaceIDAvailable) {
        Alert.alert("Error", "Face ID is not supported on this device.");
        return;
      }

      if (!isEnrolled) {
        Alert.alert(
          "Error",
          "No biometric data enrolled. Please set up Face ID in device settings."
        );
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with Face ID",
        cancelLabel: "Cancel",
        disableDeviceFallback: true, // Prevent fallback to passcode
      });

      if (result.success) {
        Alert.alert("Success", "Authenticated with Face ID!");
        // Proceed with your app logic (e.g., navigate to a protected screen)
      } else {
        Alert.alert(
          "Authentication Failed",
          result.error || "Face ID authentication failed."
        );
        console.log(result.error)
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during authentication.");
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.arrowLeft}
          >
            <Ionicons name="chevron-back" size={30} />
          </Pressable>
          <View>
            <Text style={styles.textGetStarted}>Hey,</Text>
            <Text style={styles.textGetStarted}>Welcome Back</Text>
          </View>
          <Text style={styles.instructionText}>Please login to continue</Text>

          <View style={styles.formContainer}>
            <FormElement
              icon="mail-outline"
              placeholder="Enter your email"
              onChangeText={(value) => setEmail(value)}
              secureTextEntry={false}
              inputMode="email"
            />
            <FormElement
              icon="lock-open-outline"
              placeholder="Enter your password"
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              inputMode="text"
            />
          </View>

          <Text style={styles.textForgotPassword}>Forgot Password?</Text>

          <Footer
            buttonText="Login"
            buttonPress={onSubmit}
            isButtonLoading={isLoading}
            footerText="Don't have an account?"
            actionText="Sign up"
            actionPress={() => navigation.replace("Signup")}
          />

          {/* <Button
            title="Authenticate with Face ID"
            onPress={handleBiometricAuth}
            disabled={
              !isBiometricSupported || !isFaceIDAvailable || !isEnrolled
            }
          /> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingTop: hp(10),
    gap: hp(3),
  },
  arrowLeft: {
    backgroundColor: theme.colors.gray,
    borderRadius: theme.radius.md,
    alignSelf: "flex-start",
    padding: wp(1),
  },
  containerGetStarted: {},
  textGetStarted: {
    fontSize: hp(4.5),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  instructionText: {
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  formContainer: {
    gap: hp(2),
  },
  textForgotPassword: {
    textAlign: "right",
    fontSize: hp(1.8),
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.text,
  },
  button: {
    marginHorizontal: wp(3),
    height: hp(7.5),
    justifyContent: "center",
  },
  buttonText: {
    fontSize: hp(2.5),
  },
});
