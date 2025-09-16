import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardItem from '../components/CardItem';
import { ListItem } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Types';
import { useNavigation } from '@react-navigation/native';

const data: ListItem[] = [
    {
        id: '1',
        title: 'Casual Shirt',
        description: 'Cotton Navy Blue',
        image: require('../assets/images/item1.jpeg'),
    },
    {
        id: '2',
        title: 'Casual Trouser',
        description: 'Light Green Cotton',
        image: require('../assets/images/item2.jpeg'),
    },
    {
        id: '3',
        title: 'Formal Shoes',
        description: 'Ezok Leather Shoes',
        image: require('../assets/images/item3.jpeg'),
    },
    {
        id: '4',
        title: 'Casio Digital Watch',
        description: 'Classic Digital Watch',
        image: require('../assets/images/item4.jpeg'), 
    },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Landing'>;

const LandingScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleCardPress = (item: ListItem) => {
        navigation.navigate('Detail', { item });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => handleCardPress(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 16 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fce4f9',
    },
});

export default LandingScreen;