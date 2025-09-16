import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Dimensions,
    Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { COLORS, FONT_SIZES, SPLASH_DURATION } from '../utils/constants';
import strings from '../utils/strings';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

interface Props {
    navigation: SplashScreenNavigationProp;
}

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC<Props> = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Landing');
        }, SPLASH_DURATION);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <ImageBackground
                source={require('../assets/images/splash-background.jpeg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.content}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/logo.jpeg')}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>{strings.title}</Text>
                    <Text style={styles.subtitle}>{strings.subtitle}</Text>
                    <Text style={styles.body}>{strings.body}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 32,
        width: 32,
    },
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
    },
    content: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 60,
        marginHorizontal: 32,
    },
    title: {
        fontSize: FONT_SIZES.xxxlarge,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: 20,
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: FONT_SIZES.xlarge,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: COLORS.primary,
        alignSelf: 'center',
        marginTop: 8,
        letterSpacing: 1,
    },
    body: {
        fontSize: FONT_SIZES.small,
        color: COLORS.darkGray,
        marginTop: 40,
        letterSpacing: 1,
    },
    loader: {
        marginTop: 60,
    },
});

export default SplashScreen;