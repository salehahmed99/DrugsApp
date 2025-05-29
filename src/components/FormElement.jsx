import { StyleSheet, Text, View, TextInput } from "react-native";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
const FormElement = ({
  icon,
  placeholder,
  onChangeText,
  secureTextEntry,
  inputMode,
}) => {
  return (
    <View style={styles.formItem}>
      <View style={{ justifyContent: "center" }}>
        <Ionicons name={icon} size={24} color={theme.colors.textLight} />
      </View>
      <TextInput
        style={styles.formItemTitle}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textLight}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        inputMode={inputMode}
      />
    </View>
  );
};

export default FormElement;

const styles = StyleSheet.create({
  formItem: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    height: hp(7),
    alignItems: "stretch",
    paddingLeft: wp(3),
    gap: wp(3),
  },
  formItemTitle: {
    flex: 1,
  },
});
