import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    description: string;
    image: any;
    onPress?: () => void;
}

const CardItem: React.FC<Props> = ({ title, description, image, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.card}>
            <Image source={image} style={styles.image} resizeMode="contain" />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 220,
    },
    content: {
        padding: 16,
        alignItems: 'flex-start', 
    },
    title: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
        textAlign: 'left',
    },
    description: {
        fontSize:10 , 
        color: '#555',
        textAlign: 'left',
    },
});

export default CardItem;