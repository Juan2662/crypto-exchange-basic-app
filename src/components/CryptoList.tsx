import React, { useMemo } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import useCryptoStore from '../store/useCryptoStore';
import { useBottomTabBarHeight } from 'react-native-bottom-tabs';
import CoinItem from './CoinItem';

const COINS_PER_PAGE = 20;

const CryptoListComponent = () => {
    const bottomTabBarHeight = useBottomTabBarHeight();

    const { getCryptoList, data, isLoading, isLoadingMore, errorMessage, filterText } = useCryptoStore();
    const [page, setPage] = React.useState(0);

    const loadData = (refresh = false) => {
        if (refresh) {
            setPage(0);
            getCryptoList({ limit: COINS_PER_PAGE, start: 0 });
        } else {
            getCryptoList({ limit: COINS_PER_PAGE, start: 0 });
        }
    };

    const loadMoreData = () => {
        if (!isLoading && !isLoadingMore && !errorMessage && !filterText) {
            const nextPage = page + 1;
            setPage(nextPage);
            getCryptoList({ limit: COINS_PER_PAGE, start: nextPage * COINS_PER_PAGE }, true);
        }
    };

    const filteredCoins = useMemo(() => {
        if (!data?.data || !filterText.trim()) {
            return data?.data || [];
        }

        const searchTerm = filterText.toLowerCase().trim();
        return data.data.filter(coin =>
            coin.name.toLowerCase().includes(searchTerm) ||
            coin.symbol.toLowerCase().includes(searchTerm)
        );
    }, [data?.data, filterText]);

    const renderFooter = () => {
        if (isLoadingMore) {
            return (
                <View className="py-5 justify-center items-center">
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text className="mt-2 text-gray-500">Loading more coins...</Text>
                </View>
            );
        }
        return null;
    };

    const renderItemSeparator = () => (
        <View className="h-0.5 bg-gray-100 mx-5" />
    );

    const renderError = () => {
        if (errorMessage) {
            return (
                <View className="p-5 bg-red-50 m-4 rounded-md">
                    <Text className="text-red-700 text-center mb-2">{errorMessage}</Text>
                    <TouchableOpacity
                        className="bg-red-600 py-2 px-4 rounded-md self-center"
                        onPress={() => loadData()}
                    >
                        <Text className="text-white font-semibold">Retry</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return null;
    };

    const renderEmptyResult = () => {
        if (filterText && filteredCoins.length === 0 && !isLoading) {
            return (
                <View className="py-10 items-center">
                    <Text className="text-gray-500 text-lg">No cryptocurrencies found matching "{filterText}"</Text>
                </View>
            );
        }
        return null;
    };

    React.useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading && page === 0) {
        return (
            <View className="mt-6 items-center">
                <ActivityIndicator size="large" color="gray" />
            </View>
        );
    }

    return (
        <View>
            {renderError()}
            <FlatList
                data={filteredCoins}
                style={{ paddingBottom: bottomTabBarHeight }}
                renderItem={({ item }) => <CoinItem {...item} />}
                ItemSeparatorComponent={renderItemSeparator}
                ListEmptyComponent={renderEmptyResult}
                keyExtractor={(item) => item.id}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                refreshing={isLoading && page === 0}
                onRefresh={() => loadData(true)}
            />
        </View>
    );
};

export default CryptoListComponent;
