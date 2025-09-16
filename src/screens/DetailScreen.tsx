import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Types';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC = () => {
    const route = useRoute<DetailRouteProp>();
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },
    image: {
    width: '80%',     
    height: 200,      
    marginBottom: 20,
    alignSelf: 'center', 
},
    title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4, 
    textAlign: 'left',
    width: '100%',
},

    description: {
        fontSize: 10,
        color: '#444',
        textAlign: 'left',
        width: '100%',
    },
});

export default DetailScreen;