import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetails/About';
import MenuItem from '../components/restaurantDetails/MenuItem';
import ViewCart from '../components/restaurantDetails/ViewCart';

export default function RestaurantDetails({route, navigation}) {
    const {name, categories, price, rating, reviews, image_url} = route.params.restaurant;
    return (
            <SafeAreaView style={styles.container}>
                <About
                    name={name}
                    categories={categories}
                    price={price}
                    rating={rating}
                    reviews={reviews}
                    image_url={image_url}
                />
                <Divider width={1.8} style={{marginVertical: 20}} />
                <MenuItem restaurantName={name} />
                <ViewCart navigation={navigation} restaurantName={name} />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
