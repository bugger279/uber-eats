import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name={"home"} text="Home" />
            <Icon style={styles.icon} name={"search"} text="Browse" />
            <Icon style={styles.icon} name={"shopping-bag"} text="Grocery" />
            <Icon style={styles.icon} name={"receipt"} text="Orders" />
            <Icon style={styles.icon} name={"user"} text="Account" />
        </View>
    )
}

const Icon = ({ name, text }) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={name}
                size={25}
                style={styles.icon}
            />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },
    icon: {
        marginBottom: 3,
        alignSelf: 'center'
    }
})
