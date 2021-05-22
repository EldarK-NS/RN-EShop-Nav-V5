import React from 'react';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
// import {} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import MyColors from '../constants/MyColors';

import ProductsOverviewScreen, { screenOptions as productsOverviewScreenOptions } from './../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen, { screenOptions as productDetailScreenOptions } from './../screens/shop/ProductDetailScreen';
import CartScreen, { screenOptions as cartScreenOptions } from './../screens/shop/CartScreen';
import OdersScreen, { screenOptions as ordersScreenOptions } from './../screens/shop/OdersScreen';
import UserProductsScreen, { screenOptions as userProductsScreenOptions } from './../screens/user/UserProductsScreen';
import EditProductScreen, { screenOptions as editProductScreenOptions } from './../screens/user/EditProductScreen';
import AuthScreen, { screenOptions as authScreenOptions } from './../screens/user/AuthScreen';

import StartupScreen from './../screens/StartupScreen';

import { logout } from '../store/actions/auth'

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? MyColors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'roboto-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'roboto-regular'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : MyColors.primary
}


const ProductsStackNavigator = createStackNavigator()

export const ProductsNavigator = () => {
    return (
        <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <ProductsStackNavigator.Screen
                name='ProductsOverview'
                component={ProductsOverviewScreen}
                options={productsOverviewScreenOptions}
            />
            <ProductsStackNavigator.Screen
                name='ProductDetail'
                component={ProductDetailScreen}
                options={productDetailScreenOptions}
            />
            <ProductsStackNavigator.Screen
                name='Cart'
                component={CartScreen}
                options={cartScreenOptions}
            />
        </ProductsStackNavigator.Navigator>
    )
}


// const ProductsNavigator = createStackNavigator({
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen
// }, {
//     navigationOptions: {
//         drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//             size={23} color={drawerConfig.tintColor}
//         />
//     },
//     defaultNavigationOptions: defaultNavOptions
// })

const OrdersStackNavigator = createStackNavigator()

export const OrdersNavigator = () => {
    return (
        <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <OrdersStackNavigator.Screen
                name='Orders'
                component={OdersScreen}
                options={ordersScreenOptions}
            />
        </OrdersStackNavigator.Navigator>
    )
}

// const OrdersNavigator = createStackNavigator({
//     Orders: OdersScreen
// }, {
//     navigationOptions: {
//         drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
//             size={23} color={drawerConfig.tintColor}
//         />
//     },
//     defaultNavigationOptions: defaultNavOptions
// })

const AdminStackNavigator = createStackNavigator()

export const AdminNavigator = () => {
    return (
        <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AdminStackNavigator.Screen
                name='UserProducts'
                component={UserProductsScreen}
                options={userProductsScreenOptions}
            />
            <AdminStackNavigator.Screen
                name='EditProduct'
                component={EditProductScreen}
                options={editProductScreenOptions}
            />
        </AdminStackNavigator.Navigator>
    )
}

// const AdminNavigator = createStackNavigator({
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen
// }, {
//     navigationOptions: {
//         drawerIcon: drawerConfig => (<Ionicons name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
//             size={23} color={drawerConfig.tintColor}
//         />)
//     },
//     defaultNavigationOptions: defaultNavOptions
// })

const ShopDrawerNavigator = createDrawerNavigator()

export const ShopNavigator = () => {
    const dispatch = useDispatch()
    return (
        <ShopDrawerNavigator.Navigator
            drawerContent={props => {
                return (
                    <View style={{ flex: 1, paddingTop: 60 }}>
                        <SafeAreaView forceInset={{ top: 'always', horisontal: 'never' }}>
                            <DrawerItemList {...props} />
                            <Button title='Logout' color={MyColors.primary} onPress={() => {
                                dispatch(logout())
                                // props.navigation.navigate('Auth')
                            }} />

                        </SafeAreaView>
                    </View>
                )
            }}
            drawerContentOptions={{
                activeTintColor: MyColors.primary,
                labelStyle: {
                    fontFamily: 'roboto-bold',
                    fontSize: 18
                }
            }}>
            <ShopDrawerNavigator.Screen
                name='Products'
                component={ProductsNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                            size={23}
                            color={props.color}
                        />)
                }}
            />
            <ShopDrawerNavigator.Screen
                name='Orders'
                component={OrdersNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                            size={23}
                            color={props.color}
                        />)
                }}
            />
            <ShopDrawerNavigator.Screen
                name='Admin'
                component={AdminNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                            size={23}
                            color={props.color}
                        />)
                }}
            />
        </ShopDrawerNavigator.Navigator>
    )
}





// const ShopNavigator = createDrawerNavigator({
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator
// }, {
//     contentOptions: {
//         activeTintColor: MyColors.primary,
//         labelStyle: {
//             fontFamily: 'roboto-bold',
//             fontSize: 18
//         }
//     },
//     contentComponent: props => {
//         const dispatch = useDispatch()
//         return (
//             <View style={{ flex: 1, paddingTop: 60 }}>
//                 <SafeAreaView forceInset={{ top: 'always', horisontal: 'never' }}>
//                     <DrawerNavigatorItems {...props} />
//                     <Button title='Logout' color={MyColors.primary} onPress={() => {
//                         dispatch(logout())
//                         // props.navigation.navigate('Auth')
//                     }} />

//                 </SafeAreaView>
//             </View>
//         )
//     }
// })



const AuthStackNavigator = createStackNavigator()

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AuthStackNavigator.Screen
                name='Auth'
                component={AuthScreen}
                options={authScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    )
}

// const AuthNavigator = createStackNavigator({
//     Auth: AuthScreen
// }, {
//     defaultNavigationOptions: defaultNavOptions
// })

// const MainNavigator = createSwitchNavigator({
//     Startup: StartupScreen,
//     AuthScreen: AuthNavigator,
//     Shop: ShopNavigator
// })



// export default createAppContainer(MainNavigator)