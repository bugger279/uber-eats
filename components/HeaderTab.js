import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HeaderTab() {
    const [activeTab, setActiveTab] = useState('Delivery');

    return (
        <View style={styles().buttonContainer}>
            <HeaderButton
                text={"Delivery"}
                btnColor={"#000"}
                txtColor={'#fff'}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text={"Pickup"}
                btnColor={'#fff'}
                txtColor={'#000'}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton = ({ text, btnColor, txtColor, activeTab, setActiveTab }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                setActiveTab(text)
            }}
            style={[{ backgroundColor: activeTab === text ? '#000' : '#fff', }, styles().buttons]}>
            <Text style={[styles().buttonText, { color: activeTab === text ? '#fff' : '#000' }]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = (val, activeTab) => StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    buttons: {
        marginHorizontal: 5,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '900'
    }
})
