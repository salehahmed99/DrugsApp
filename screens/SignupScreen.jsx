import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import FormElement from "../components/FormElement";
import Footer from "../components/Footer";
import { useState } from "react";
import { useAuth } from "../store/auth-context";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isLoading } = useAuth();

  const onSubmit = async () => {
    if (
      name.trim().length == 0 ||
      email.trim().length == 0 ||
      password.trim().length == 0
    ) {
      Alert.alert("Signup Error", "Please fill all the fields");
      return;
    }
    await signup(name, email, password);
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
            <Text style={styles.textGetStarted}>Let's</Text>
            <Text style={styles.textGetStarted}>Get Started</Text>
          </View>
          <Text style={styles.instructionText}>
            Please fill the details to create an account
          </Text>

          <View style={styles.formContainer}>
            <FormElement
              icon="person-outline"
              placeholder="Enter your name"
              onChangeText={(value) => setName(value)}
              secureTextEntry={false}
              inputMode="text"
            />
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

          <Footer
            buttonText="Sign up"
            buttonPress={onSubmit}
            isButtonLoading={isLoading}
            footerText="Already have an account!"
            actionText="Login"
            actionPress={() => navigation.replace("Login")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

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
});
