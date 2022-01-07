import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuItem({ restaurantName, foods, hideCheckBox }) {

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
                        {hideCheckBox ? (<></>) : (
                            <BouncyCheckbox
                                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                                fillColor='green'
                                isChecked={isFoodinCart(food)}
                                iconStyle={{ borderColor: "gray", color: 'green' }}
                            />
                        )}
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
