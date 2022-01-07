import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function OrderItem({ item }) {
    const { title, price } = item;
    return (
        <View style={styles.container}>
            <Text style={[styles.food]}>{title}</Text>
            <Text style={styles.text}>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#999',
        width: '100%'
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
    },
    food: {
        fontWeight: '900',
        fontSize: 16,
        color: '#000'
    }
})
