/*
* WelcomeBack.tsx
*
* Welcome back message component
* 
*/

import React from 'react';
import {Text, View, StyleSheet, } from 'react-native';
import { Colors } from '@/constants/Colors';

type WelcomeBackProps = {
    name: string
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    primaryText: {
        fontSize: 32,
    },
    secondaryText: {
        color: '#971e13',
        fontSize: 32,
        fontWeight: 'bold'
    }
});

const WelcomeBack = (props: WelcomeBackProps) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.primaryText}>Welcome Back,</Text>
            <Text style={styles.secondaryText}>{props.name}!</Text>
        </View>
    </View>
  );
};

export default WelcomeBack;