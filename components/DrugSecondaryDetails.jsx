import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '../helpers/common'
import DrugDetailRow from './DrugDetailRow'

const DrugSecondaryDetails = ({ clicked, pharmacology, subCategory, company }) => {
    return (
        clicked && <View style={styles.container}>

            <DrugDetailRow
                detailName="Pharmacology : "
                detailText={pharmacology}
            />
            <DrugDetailRow
                detailName="Sub-Category : "
                detailText={subCategory}
            />
            <DrugDetailRow detailName="Company : " detailText={company} />
        </View>
    )
}

export default DrugSecondaryDetails

const styles = StyleSheet.create({
    container: {
        gap: hp(0.8),
    },
})