import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import ApiService from '@services/Api.service';
import { LineChart } from 'react-native-wagmi-charts';

import type { CoinsData } from '@store/types';

const { height, width } = Dimensions.get('window');
const chartHeight = height * 0.25;

const timeFrames = ['1D', '7D', '1M', '1Y', 'ALL'];

const CoinChart: React.FC<CoinsData> = (coinData) => {
    const [points, setPoints] = useState<Array<{ value: number, timestamp: number }>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('7D');
    const [isChartReady, setIsChartReady] = useState(false);

    const fetchCoinPoints = useCallback(async (timeFrame: string = '7D') => {
        setLoading(true);
        setIsChartReady(false);
        try {
            const response = await ApiService.getCoinChart(coinData.id, timeFrame.toLowerCase());
            if (response.success && response.data) {
                const priceData = response.data.price;
                const formattedPoints = priceData.map(([timestamp, price]) => {
                    return { timestamp, value: price };
                });
                setPoints(formattedPoints);
                setIsChartReady(true);
            }
        } catch (error) {
            console.error('Error fetching chart data:', error);
        } finally {
            setLoading(false);
        }
    }, [coinData]);

    const handleTimeFrameChange = (timeFrame: string) => {
        if (timeFrame === selectedTimeFrame) {return;}
        setSelectedTimeFrame(timeFrame);
        fetchCoinPoints(timeFrame);
    };

    useEffect(() => {
        if(coinData && coinData.id) {
            fetchCoinPoints(selectedTimeFrame);
        }
    }, [coinData, fetchCoinPoints, selectedTimeFrame]);

    const percentChange24h = parseFloat(coinData.percent_change_24h || '0');

    return (
        <View className="mt-5">
            <View className="flex-row justify-around mx-5 mb-2">
                {timeFrames.map((time) => (
                    <TouchableOpacity
                        key={time}
                        onPress={() => handleTimeFrameChange(time)}
                        className={`px-3 py-1 rounded-md ${selectedTimeFrame === time ? 'bg-gray-200' : ''}`}
                    >
                        <Text className={`${selectedTimeFrame === time ? 'font-bold' : ''}`}>{time}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {loading ? (
                <View className="flex-row items-center justify-center" style={{ height: chartHeight }}>
                    <ActivityIndicator size="small" color="#0000ff" />
                </View>
            ) : isChartReady && points.length > 0 ? (
                <View>
                    <LineChart.Provider data={points}>
                        <LineChart height={chartHeight} width={width}>
                            <LineChart.Path color={percentChange24h >= 0 ? 'green' : 'red'}>
                                <LineChart.Gradient color="black" />
                            </LineChart.Path>
                            <LineChart.CursorCrosshair>
                                <LineChart.Tooltip />
                            </LineChart.CursorCrosshair>
                        </LineChart>
                    </LineChart.Provider>
                </View>
            ) : (
                <View className="flex-row items-center justify-center" style={{ height: chartHeight }}>
                    <Text>Preparing chart...</Text>
                </View>
            )}
        </View>
    );
};

export default CoinChart;
