import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { db } from '../../firebase';
import OrderItem from './OrderItem'

export default function ViewCart({ navigation, restaurantName }) {
    const [modalVisible, setModalVisible] = useState(false);
    const items = useSelector(state => state.cartReducer.selectedItems.items);
    const priceArray = items.map((item) => Number(item.price.replace('$', '')));
    const total = priceArray.reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: 'USD'
    })

    const addToFirebase = async () => {
        await addDoc(collection(db, 'orders'), {
            items,
            restaurantName,
            createdAt: serverTimestamp()
        })
        
        setModalVisible(false);
        navigation.navigate('OrderCompleted');
    }

    return (
        <>
            <Modal
                style={{
                    // backgroundColor: 'rgba(0,0,0,0.3)',
                }}
                animationType='slide'
                visible={modalVisible}
                transparent={false}
                onRequestClose={() => setModalVisible(false)}
            >
                <Checkout setModalVisible={setModalVisible} addToFirebase={addToFirebase} items={items} restaurantName={restaurantName} totalUSD={totalUSD} />
            </Modal>
            {total ? (<View style={styles.container}>
                <View style={styles.cartButtonWrapper}>
                    <TouchableOpacity
                        activeOpacity={0.80}
                        style={styles.cartButton}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.text}>View Cart</Text>
                        <Text style={styles.text}>${totalUSD}</Text>
                    </TouchableOpacity>
                </View>
            </View>) : null
            }
        </>
    )
}

const Checkout = ({ setModalVisible, restaurantName, items, totalUSD, addToFirebase }) => (
    <>
        <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                {
                    items.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))
                }
                <View style={styles.subTotalContainer}>
                    <Text style={styles.subTotalText}>Subtotal</Text>
                    <Text style={styles.subTotalTextPrice}>${totalUSD}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.checkoutButton}
                        onPress={() => {
                            addToFirebase()
                        }}
                        >
                        <Text style={styles.checkoutButtonText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
)

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
        justifyContent: 'space-between'
    },
    price: {
        marginLeft: 20
    },
    cartButton: {
        marginTop: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cartButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        zIndex: 99
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0, 1)'
    },
    modalCheckoutContainer: {
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'center',
        height: 500,
        borderWidth: 1
    },
    restaurantName: {
        fontWeight: '600',
        fontSize: 24,
        color: '#000',
        marginBottom: 20
    },
    checkoutButton: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 200
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 20
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        width: '100%',
        marginBottom: 130
    },
    subTotalText: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '900',
        fontSize: 16,
        color: '#000'
    },
    subTotalTextPrice : {
        fontWeight: '900',
        fontSize: 16,
        color: '#000'
    }
})
