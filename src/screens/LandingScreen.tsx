import React from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import CardItem from '../components/CardItem';
import { ListItem } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Types';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../utils/constants';

const data: ListItem[] = [
    {
        id: '1',
        title: 'Elegant Home',
        description: 'Spacious contemporary design',
        image: require('../assets/images/item1.jpeg'),
    },
    {
        id: '2',
        title: 'Modern Home',
        description: 'Sleek archiyecture',
        image: require('../assets/images/item2.jpeg'),
    },
    {
        id: '3',
        title: 'Dream Stay',
        description: 'Elegent living spaces',
        image: require('../assets/images/item3.jpeg'),
    },
    {
        id: '4',
        title: 'Luxury Home',
        description: 'Natural stone accents',
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
            <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
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
        paddingTop: 15,
    },
});

export default LandingScreen;