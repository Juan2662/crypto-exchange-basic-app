import { View } from 'react-native';
import ExploreHeaderComponent from '@components/ExploreHeader';
import CryptoListComponent from '@components/CryptoList';

const ExploreScreen = () => {
    return (
        <View>
            <ExploreHeaderComponent />
            <CryptoListComponent />
        </View>
    );
};

export default ExploreScreen;
