import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const NotificationsScreen = () => (
    <View style={styles.screen}>
        <Text>Notifications</Text>
    </View>
);

const HistoryScreen = () => (
    <View style={styles.screen}>
        <Text>History</Text>
    </View>
);

const CartScreen = () => (
    <View style={styles.screen}>
        <Text>Cart</Text>
    </View>
);

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Notifications') {
                            iconName = 'notifications-outline';
                        } else if (route.name === 'Scan') {
                            iconName = 'scan-outline';
                        } else if (route.name === 'History') {
                            iconName = 'time-outline';
                        } else if (route.name === 'Cart') {
                            iconName = 'cart-outline';
                        }

                        return (
                            <View style={[focused && styles.activeTab]}>
                                <Ionicons name={iconName} size={size} color={color} />
                                {route.name === 'Notifications' && (
                                    <Badge status="error" containerStyle={styles.badgeStyle} />
                                )}
                            </View>
                        );

                    },
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: styles.tabBar,
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Notifications" component={NotificationsScreen} />
                <Tab.Screen name="Scan" component={ScanScreen} />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 60,
        paddingBottom: 10,
        paddingTop: 5,
    },
    activeTab: {
        borderRadius: 10,
        backgroundColor: 'rgba(0, 122, 255, 0.2)', // Viền xanh khi chọn
        position: 'absolute',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeStyle: {
        position: 'absolute',
        top: -4,
        right: -4,
    },
});

export default BottomTabNavigator;
