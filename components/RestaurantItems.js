import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItems({ restaurantsData, navigation }) {
    const [restaurants, setRestaurants] = useState(restaurantsData)

    return (
        restaurants.map((restaurant, index) => (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RestaurantDetail', {restaurant})
                }}
                key={index}
                activeOpacity={0.80}
                style={{ marginBottom: 10 }}
            >
                <View style={styles.restWrapper}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            </TouchableOpacity>
        ))
    )
}

const RestaurantImage = ({ image }) => (
    <>
        <Image
            style={styles.restImage}
            source={{ uri: image }}
        />
        <TouchableOpacity style={styles.floatLike}>
            <MaterialCommunityIcons name='heart-outline' size={25} color={'#fff'} />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = ({ name, rating }) => (
    <View style={styles.infoWrapper}>
        <View>
            <Text style={styles.highlight}>{name}</Text>
            <Text style={styles.time}>30-45 . min</Text>
        </View>
        <Text style={styles.rating}>{rating}</Text>
    </View>
);

const styles = StyleSheet.create({
    restImage: {
        height: 180,
        width: '100%'
    },
    floatLike: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    highlight: {
        fontWeight: '700',
        fontSize: 18
    },
    time: {
        fontSize: 13,
        color: 'gray'
    },
    rating: {
        fontWeight: '500',
        fontSize: 18,
        backgroundColor: '#eee',
        borderRadius: 11,
        padding: 11,
        width: 50,
        textAlign: 'center'
    },
    infoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff'
    },
    restWrapper: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10
    }
})
