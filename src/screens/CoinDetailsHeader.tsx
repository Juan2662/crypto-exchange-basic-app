import { Pressable, Text, View } from 'react-native';
import { ArrowLeftIcon } from '@assets/icons';
import { useNavigation } from '@react-navigation/native';

const CoinDetailsHeader = () => {
    const navigation = useNavigation();
    const handlePressBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };
    return (
        <View className="flex-row items-center justify-between relative py-3 mx-5 mb-5">
            <Pressable onPress={handlePressBack} className="z-10">
                <ArrowLeftIcon />
            </Pressable>
            <Text className="absolute w-full text-2xl font-bold text-center">Coin Details</Text>
            <View />
        </View>
    );
};

export default CoinDetailsHeader;
