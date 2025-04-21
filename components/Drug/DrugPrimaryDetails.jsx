import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrugDetailRow from './DrugDetailRow'
import { hp, wp } from '../../helpers/common'
import { COLORS } from '../../constants/colors'

const DrugPrimaryDetails = ({ clicked, name, contents, price }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textName} numberOfLines={clicked ? 3 : 1} ellipsizeMode="clip">{name}</Text>
            <Text style={styles.textContents} numberOfLines={clicked ? 3 : 1} ellipsizeMode="clip" >{contents} </Text>
            <Text style={styles.price}>{price}</Text>
        </View>

    )
}

export default DrugPrimaryDetails

const styles = StyleSheet.create({
    container: {
        gap: hp(0.8),
    },

    textName: {
        fontSize: hp(1.8),
        color: "black",
        fontWeight: "bold",
        paddingEnd: wp(2),
        // borderWidth:2,
    },
    textContents: {
        fontSize: hp(1.6),
        color: COLORS.secondaryText,
        flexWrap: "wrap",
        flexShrink: 1,
        // borderWidth:1,
        paddingEnd: wp(2)
    },
    price: {
        fontWeight: "600",
        fontSize: hp(1.6)
    },
})