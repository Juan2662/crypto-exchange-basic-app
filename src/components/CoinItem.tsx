import { Image, Text, TouchableOpacity, View } from 'react-native';
import { formatter, getCoinImgUrl } from '../utils/helpers';
import { useNavigation } from '@react-navigation/native';
import type { CoinsData } from '../store/types';
import type { ScreenNavigationProp } from '../navigation/types';

const CoinItem: React.FC<CoinsData> = (item) => {
    const { name, nameid,symbol, price_usd, percent_change_24h } = item;
    const navigation = useNavigation<ScreenNavigationProp<'Main'>>();
    const handlePressCoin = () => {
        navigation.navigate('CoinDetails', item);
    };
    return (
        <TouchableOpacity onPress={handlePressCoin}>
            <View className="flex-row items-center justify-between py-3 px-5">
                <View className="flex-row items-center gap-3">
                    <Image
                        source={{ uri: getCoinImgUrl(nameid, true) }}
                        className="w-[40px] h-[40px] rounded-full"
                    />
                    <View>
                        <Text className="text-lg font-semibold">{name}</Text>
                        <Text className="text-sm text-gray-500">{symbol}</Text>
                    </View>
                </View>
                <View className="items-end">
                    <Text className="text-lg font-semibold">{formatter.formatCurrency(price_usd)}</Text>
                    <View className="flex-row items-center gap-1">
                        {Number(percent_change_24h) < 0 ? (
                            <Text className="text-red-600">↓</Text>
                        ) : (
                            <Text className="text-green-500">↑</Text>
                        )}
                        <Text className={`text-sm ${Number(percent_change_24h) < 0 ? 'text-red-600' : 'text-green-500'}`}>{formatter.formatPercentage(percent_change_24h)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CoinItem;
