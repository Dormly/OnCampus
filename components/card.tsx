/*
* card.tsx
*
* This file is the template where the majority of conent is
* to be displayed, so visuals remain consistent through the
* app.
*/

import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 24,
        width: '100%',
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 2,
        elevation: 5
    }
});

const Card = ({children}: any) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  );
};

export default Card;