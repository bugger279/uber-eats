import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function About({ name, categories, price, rating, reviews, image_url }) {
    const formattedCategories = categories.map((cat) => cat).join(" 🍛 ");
    const description = `${formattedCategories} $${price} ★ ${rating} 😊${reviews}`;
    return (
        <View>
            <RestaurantImage image={image_url} />
            <RestaurantTitle title={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.image} />
);
const RestaurantTitle = ({ title }) => (
    <Text style={styles.title}>{title}</Text>
);
const RestaurantDescription = ({ description }) => (
    <Text style={styles.description}>{description}</Text>
);

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 120,
    },
    title: {
        fontSize: 29,
        fontWeight: '900',
        marginTop: 10,
        marginHorizontal: 15
    },
    description: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15
    }
})
