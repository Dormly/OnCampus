/*
* CardTitle.tsx
*
* For cards that have titles, this component can be used
* and will display an icon, a title, and a forward button
* if desired.
* 
*/

import React from 'react';
import {Text, View, StyleSheet, } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

type CardTitleProps = {
    icon: string;
    title: string;
    button: boolean;
    link?: string;
}

const styles = StyleSheet.create({
    cardTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#971e13',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5
    }
});

const CardTitle = (props: CardTitleProps) => {
  return (
    <View style={styles.cardTitle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconSymbol size={20} name={props.icon} color={Colors.light.tint} weight="bold" />
            <Text style={styles.text}>{props.title}</Text>
        </View>
        {props.button && <IconSymbol size={20} name="arrow.right" color={Colors.light.text} weight="bold"/>}
    </View>
  );
};

export default CardTitle;