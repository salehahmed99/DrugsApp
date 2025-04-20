import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { wp } from '../helpers/common'
import { COLORS } from '../constants/colors'

const PressableIcon = ({ onDrugPress, clicked }) => {
    return (
        <Pressable onPress={onDrugPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={clicked ? "chevron-up" : "chevron-down"} size={18} color={clicked ? COLORS.secondary : COLORS.secondaryText} />
        </Pressable>
    )
}

export default PressableIcon

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
})