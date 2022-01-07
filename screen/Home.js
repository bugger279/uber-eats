import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/BottomTabs'
import Categories from '../components/Categories'
import HeaderTab from '../components/HeaderTab'
import RestaurantItems from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'

const Restaurants = [
    {
        name: 'Indian Grill\'s',
        rating: '4.9',
        price: '$$',
        reviews: 700,
        categories: ['Indian', 'Bar', 'Veg'],
        image_url: "https://images.unsplash.com/photo-1641283356224-79a4c4a7e768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
        name: 'Japanese Grill\'s',
        rating: '3.6',
        price: '$$',
        reviews: 700,
        categories: ['Japanese', 'Bar', 'Veg'],
        image_url: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: 'Dutchese Grill\'s',
        rating: '4.7',
        price: '$$',
        reviews: 700,
        categories: ['Dutchese', 'Bar', 'Veg'],
        image_url: "https://www.holidify.com/images/cmsuploads/compressed/indian-1768906_1920_20180322173733.jpg",
    },
    {
        name: 'Arabic Grill\'s',
        rating: '4.1',
        price: '$$',
        reviews: 700,
        categories: ['Arabic', 'Bar', 'Veg'],
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
    },
    {
        name: 'Arabic Grill\'s',
        rating: '4.1',
        price: '$$',
        reviews: 700,
        categories: ['Arabic', 'Bar', 'Veg'],
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
    }
];

export default function Home({navigation}) {
    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <HeaderTab />
                    <SearchBar />
                </View>
                <ScrollView>
                    <Categories />
                    <RestaurantItems restaurantsData={Restaurants} navigation={navigation} />
                </ScrollView>
                <Divider width={1} />
                <BottomTabs />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#fff',
        padding: 15,
        width: '100%',
        justifyContent: 'center'
    }
})
