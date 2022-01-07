import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetails/About';
import MenuItem from '../components/restaurantDetails/MenuItem';
import ViewCart from '../components/restaurantDetails/ViewCart';

const foods = [
    {
        title: 'Wine',
        description: 'When it comes to wine, it’s worth describing it all: sight, scents, textures and flavors. Here are a few descriptions you can use:',
        price: '$100',
        image: 'https://assets3.thrillist.com/v1/image/2953020/1000x666.6666666666666/flatten;crop;webp=auto;jpeg_quality=70'
    },
    {
        title: 'Lasagna',
        description: 'This classic lasagna is made with an easy meat sauce as the base. Layer the sauce with noodles and cheese, then bake until bubbly! ',
        price: '$150',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800'
    },
    {
        title: 'Misal Pav (मिसळपाव)',
        description: 'Misal pav is a popular dish from Maharashtra, India. It consists of misal (a spicy curry usually made from moth beans) and pav (a type of Indian bread roll)',
        price: '$180',
        image: 'https://thumbs.dreamstime.com/b/indian-marathi-snacks-misal-pav-maharashtrian-snack-chowpatty-street-food-buns-spicy-171494270.jpg'
    },
    {
        title: 'Idli & Chutney',
        description: 'The cakes are made by steaming a batter consisting of fermented black lentils ',
        price: '$200',
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/idli-recipe.jpg'
    },
    {
        title: 'Samosa',
        description: 'Fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, peas, chicken and/or other meats.',
        price: '$110',
        image: 'https://static3.bigstockphoto.com/4/2/1/large1500/124897325.jpg'
    }
]

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
                <MenuItem restaurantName={name} foods={foods} hideCheckBox={false} />
                <ViewCart navigation={navigation} restaurantName={name} />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
