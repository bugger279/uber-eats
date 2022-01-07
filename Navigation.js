import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import RestaurantDetails from './screen/RestaurantDetails';
import ViewCart from './components/restaurantDetails/ViewCart';
import { Provider } from 'react-redux';
import store from './redux/store';
import OrderCompleted from './screen/OrderCompleted';


const Stack = createStackNavigator();   

export default function Navigation() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        transitionSpec: {
                            open: {
                                animation: 'spring',
                            },
                            close: {
                                animation: 'timing'
                            }
                        }
                    }}
                    initialRouteName='Home'
                >
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetails} />
                    <Stack.Screen name='ViewCart' component={ViewCart} />
                    <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({})
