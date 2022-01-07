import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useDispatch, useSelector } from 'react-redux';

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


export default function MenuItem({ restaurantName }) {

    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
    const isFoodinCart = (food) => Boolean(cartItems.find(item => item.title === food.title))
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { ...item, restaurantName: restaurantName, checkboxValue },
        })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItem} >
                        <BouncyCheckbox
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            fillColor='green'
                            isChecked={isFoodinCart(food)}
                            iconStyle={{ borderColor: "gray", color: 'green' }}
                        />
                        <FoodInfo title={food.title} description={food.description} price={food.price} />
                        <FoodImage image={food.image} />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 15 }} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = ({ title, description, price }) => (
    <View style={styles.foodInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
    </View>
);

const FoodImage = ({ image }) => (
    <Image style={styles.image} source={{ uri: image }} />
)

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    title: {
        fontSize: 19,
        fontWeight: '600'
    },
    description: {

    },
    foodInfo: {
        width: 200,
        // justifyContent: 'space-between'
    },
    price: {

    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 8,
        resizeMode: 'contain'
    }
})
