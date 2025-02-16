/*
* WelcomeBack.tsx
*
* Welcome back message component
* 
*/

import React from 'react';
import {Text, View, StyleSheet, } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    primaryText: {
        fontSize: 32,
    },
    secondaryText: {
        color: '#8534ee',
        fontSize: 32,
        fontWeight: 'bold'
    }
});

const WelcomeBack = () => {
    // TODO: Modify function to grab name from database
    const getName = () => {
        return 'Zachary' + '!';
    }

    // This function gets the time and displays different greetings
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12){
            return 'Good Morning,';
        } else if (hour >= 12 && hour < 18) {
            return 'Good Afternoon,';
        } else {
            return 'Good Evening,';
        }
    }
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.primaryText}>{getGreeting()}</Text>
            <Text style={styles.secondaryText}>{getName()}</Text>
        </View>
    </View>
  );
};

export default WelcomeBack;