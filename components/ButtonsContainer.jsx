import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../helpers/common'
import Button from './Button'

const ButtonsContainer = ({ hideAlternatives, onDetailsPress, onAlternativesPress }) => {
    return (
        <View style={styles.buttonsContainer}>
            <Button
                title="Details"
                onPress={onDetailsPress}
                buttonStyle={styles.button}
                textStyle={{ fontSize: hp(1.8) }}
            />
            {!hideAlternatives && (
                <Button
                    title="Alternatives"
                    buttonStyle={styles.button}
                    textStyle={{ fontSize: hp(1.8) }}
                    onPress={onAlternativesPress}
                />
            )}
        </View>
    )
}

export default ButtonsContainer

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: wp(3),
        // borderWidth:1,
    },
    button: {
        paddingVertical: hp(1),
        paddingHorizontal: hp(1),
        borderRadius: 7,
    },
})