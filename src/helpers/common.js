 import { Dimensions } from "react-native";

 const {width, height} = Dimensions.get("window")

 export const hp = (percentage) => (percentage/100) * height

 export const wp = (percentage) => (percentage/100) * width