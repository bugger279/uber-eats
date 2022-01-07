import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '../components/restaurantDetails/MenuItem';
import { collection, getDocs, limit, orderBy } from 'firebase/firestore/lite';
import { db } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function OrderCompleted({navigation}) {
    const [orderedItems, setOrderedItems] = useState([]);
    const { items, restaurantName } = useSelector(state => state.cartReducer.selectedItems);
    const priceArray = items.map((item) => Number(item.price.replace('$', '')));
    const total = priceArray.reduce((prev, curr) => prev + curr, 0);
    const dispatch = useDispatch();
    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: 'USD'
    })
    useEffect(() => {
        (async function() {
            const orderRef = collection(db, 'orders');
            let querySnapshot = await getDocs(orderRef, orderBy('createdAt', 'desc'), limit(1));
            let newArray = [];
            querySnapshot.forEach((doc) => {
                newArray.push(doc.data().items);
              });
            setOrderedItems(newArray[0]);
        })()
    }, [])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
        <View style={styles.container}>
            <LottieView
                style={styles.lottieCheck}
                source={require('../assets/animations/checkMark.json')}
                autoPlay
                autoSize
            />
            <Text style={styles.orderSummary}>Your order at {restaurantName} has been placed for ${totalUSD}</Text>
            {orderedItems.length > 0 ? <MenuItem hideCheckBox={true} foods={orderedItems} />: (
              <LottieView
              style={styles.lottieCook}
              source={require('../assets/animations/loading.json')}
              autoPlay
              autoSize
          />  
            )}
            {/* <TouchableOpacity
                onPress={() => {
                    // dispatch({
                    //     type: 'REMOVE_ALL'
                    // })
                    navigation.navigate('Home')
                }}
            >
                <Text>Goto Home</Text>
            </TouchableOpacity> */}
            <LottieView
                style={styles.lottieCook}
                source={require('../assets/animations/cooking.json')}
                autoPlay
                autoSize
            />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    lottieCheck: {
        height: 150,
        alignSelf: 'center',
        marginBottom: 30
    },
    lottieCook: {
        height: 200,
        alignSelf: 'center',
    },
    orderSummary: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '700',
        marginBottom: 30
    }
})
