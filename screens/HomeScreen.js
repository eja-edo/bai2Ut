import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hello 👋</Text>
                    <Text style={styles.name}>Christie Doe</Text>
                </View>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} style={styles.avatar} />
            </View>

            {/* Insights */}
            <Text style={styles.sectionTitle}>Your Insights</Text>
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../assets/scan.png')} style={styles.icon} />
                    <Text style={styles.cardTitle}>Scan new</Text>
                    <Text style={styles.cardSubtitle}>Scanned 483</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card, styles.alertCard]}>
                    <Image source={require('../assets/warning.png')} style={styles.icon} />
                    <Text style={styles.cardTitle}>Counterfeits</Text>
                    <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../assets/success.png')} style={styles.icon} />
                    <Text style={styles.cardTitle}>Success</Text>
                    <Text style={styles.cardSubtitle}>Checkouts 8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../assets/directory.png')} style={styles.icon} />
                    <Text style={styles.cardTitle}>Directory</Text>
                    <Text style={styles.cardSubtitle}>History 26</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        color: 'gray',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    card: {
        width: '48%',
        backgroundColor: '#F8F9FB',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    alertCard: {
        position: 'relative',
    },
    icon: {
        width: 30,
        height: 30,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'gray',
    },
    badge: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: '#FF3B30',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    badgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default HomeScreen;
