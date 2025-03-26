import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { COLORS } from "../constants/colors";

export default function Button({onPress, children}) {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: COLORS.secondary,
    alignSelf: "center",
    paddingVertical: 16,
    paddingHorizontal:25,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  text:{
    color:'white',
    fontSize:16,
  },
  pressed:{
    opacity:0.7
  }
});
