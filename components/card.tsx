import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 24,
        width: '100%',
        padding: 15,
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    secondaryText: {
        fontSize: 16
    }
});

type CardProps = {
    title: string;
};

const Card = (props: CardProps) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Card;