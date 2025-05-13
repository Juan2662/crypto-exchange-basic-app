import { Text, View } from 'react-native';
import formatter from '@utils/formatter';
import { CoinsData } from '@store/types';
import { getPriceChangeColor } from '@utils/helpers';

const MarketItem: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <View className="flex-row justify-between mb-2">
        <Text className="text-gray-500">{label}</Text>
        <Text className="font-bold">{value}</Text>
    </View>
);

const PriceChangeItem: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <View className="flex-row justify-between mb-2">
        <Text className="text-gray-500">{label}</Text>
        <Text className={getPriceChangeColor(value)}>
            {parseFloat(value) > 0 ? '+' : ''}
            {value}%
        </Text>
    </View>
);

const BasicCoinDetails: React.FC<CoinsData> = (coinData) => {
    return (
        <View>
            <View className="mt-6 px-5 border-t border-gray-300 pt-3">
                <Text className="text-xl font-bold mb-3">Market Stats</Text>
                <MarketItem label="Market Cap" value={formatter.formatCurrency(coinData.market_cap_usd)} />
                <MarketItem label="Volume (24h)" value={formatter.formatCurrency(coinData.volume24)} />
                <MarketItem label="Circulating Supply" value={`${coinData.csupply} ${coinData.symbol.toUpperCase()}`} />
                <MarketItem label="Total Supply" value={coinData.tsupply || 'N/A'} />
                <MarketItem label="Max Supply" value={coinData.msupply || 'N/A'} />
            </View>

            <View className="px-5 mt-6 mb-6 border-t border-gray-300 pt-3">
                <Text className="text-xl font-bold mb-3">Price Changes</Text>
                <PriceChangeItem label="1h Change" value={coinData.percent_change_1h} />
                <PriceChangeItem label="24h Change" value={coinData.percent_change_24h} />
                <PriceChangeItem label="7d Change" value={coinData.percent_change_7d} />
            </View>
        </View>
    );
};

export default BasicCoinDetails;
