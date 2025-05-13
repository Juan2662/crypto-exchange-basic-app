import { Dimensions, Keyboard, Pressable, Text, TextInput, View } from 'react-native';
import SearchInput from '@components/SearchInput';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback, useRef } from 'react';
import { SearchIcon } from '@assets/icons';
import useCryptoStore from '@store/useCryptoStore';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ExploreHeaderComponent = () => {
    const offset = useSharedValue(0);
    const searchInputRef = useRef<TextInput>(null);
    const { setFilterText } = useCryptoStore();

    const handlePressSearchIcon = useCallback(() => {
        searchInputRef.current?.focus();
        offset.value = withTiming(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const handlePressCloseSearchInput = useCallback(() => {
        Keyboard.dismiss();
        offset.value = withTiming(0);
        setFilterText('');
        if (searchInputRef.current) {
            searchInputRef.current.clear();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: (1 - offset.value) * SCREEN_WIDTH }],
        };
    });

    const handleChangeFilter = useCallback((text: string) => {
        setFilterText(text);
    }, [setFilterText]);

    return (
        <View className="flex-row items-center justify-between relative py-3 mx-5 border-b border-gray-200">
            <View />
            <Text className="absolute w-full text-3xl font-bold text-center leading-none">Exchange</Text>
            <Pressable onPress={handlePressSearchIcon} className="z-10">
                <SearchIcon />
            </Pressable>
            <Animated.View
                style={[animatedStyles]}
                pointerEvents="box-none"
                className="absolute w-full z-10 left-0 right-0"
            >
                <View className="bg-white">
                    <SearchInput ref={searchInputRef} onPressClose={handlePressCloseSearchInput} onChangeText={handleChangeFilter} />
                </View>
            </Animated.View>
        </View>
    );
};

export default ExploreHeaderComponent;
