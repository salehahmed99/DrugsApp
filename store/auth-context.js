import { createContext, useContext, useState } from "react";
import { supabase } from "../lib/supabase";
import { Alert } from "react-native";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const login = async (email, password) => {
    setIsLoading(true);
    const {
      error,
      data: { session },
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setIsLoading(false);
    if (error) {
      Alert.alert("Login Error", error.message);
    }
    if (session) {
      setAuthUser(session.user);
    }
  };

  const signup = async (name, email, password) => {
    setIsLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
      options: {
        data: {
          name,
        },
      },
    });
    setIsLoading(false);
    if (error) {
      Alert.alert("Signup Error", error.message);
    }
    if (session) {
      setAuthUser(session?.user);
    }
  };

  const logout = async () => {
    setIsLoading(true)
    const { error } = await supabase.auth.signOut();
    setIsLoading(false)
    if (error) {
      Alert.alert("Logout Error", error.message);
    }
    setAuthUser(null)

  };

  const value = {
    authUser,
    setAuthUser,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);