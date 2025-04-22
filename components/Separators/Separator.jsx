import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'

const Separator = () => {
    return (
        <View style={styles.separator}>
        </View>
    )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        borderWidth: 0.4,
        // borderColor:COLORS.secondaryText
    }
})