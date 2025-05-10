import { useRoute } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';
import { formatter, getCoinImgUrl, getPriceChangeColor } from '../utils/helpers';
import BasicCoinDetails from './BasicCoinDetails';
import CoinChart from './CoinChart';
import CoinDetailsHeader from './CoinDetailsHeader';
import type { ScreenRouteProp } from '../navigation/types';

const CoinDetailsScreen = () => {
    const { params: coinData } = useRoute<ScreenRouteProp<'CoinDetails'>>();
    const percentChange24h = parseFloat(coinData.percent_change_24h || '0');
    return (
        <ScrollView className="flex-1 bg-white">
            <CoinDetailsHeader />
            <View className="flex-row items-center justify-between mx-5 mt-2">
                <View className="flex-row items-center">
                    <Image
                        source={{ uri: getCoinImgUrl(coinData.nameid, true) }}
                        className="w-[40px] h-[40px] rounded-full mr-3"
                    />
                    <View>
                        <Text className="text-2xl font-bold">{coinData.symbol.toUpperCase()}</Text>
                        <Text className="text-gray-500">{coinData.name}</Text>
                    </View>
                </View>
                <View>
                    <Text className="text-2xl font-bold">{formatter.formatCurrency(coinData.price_usd)}</Text>
                    <Text className={`text-right ${getPriceChangeColor(coinData.percent_change_24h)}`}>
                        {percentChange24h > 0 ? '+' : ''}
                        {percentChange24h.toFixed(2)}%
                    </Text>
                </View>
            </View>
            <CoinChart {...coinData} />
            <BasicCoinDetails {...coinData}/>
        </ScrollView>
    );
};

export default CoinDetailsScreen;
