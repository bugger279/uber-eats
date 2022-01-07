import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

export default function OrderCompleted() {
    const { items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);
    const priceArray = items.map((item) => Number(item.price.replace('$', '')));
    const total = priceArray.reduce((prev, curr) => prev + curr, 0);
    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: 'USD'
    })

    return (
        <View>
            <Text>Your order at {restaurantName} has been placed for ${totalUSD}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
