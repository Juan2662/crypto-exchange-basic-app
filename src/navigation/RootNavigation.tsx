import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import BootSplash from 'react-native-bootsplash';


const RootNavigation = () => {
    const handleOnReadyNavigation = async () => {
        await BootSplash.hide({ fade: true });
    };
    return (
        <NavigationContainer onReady={handleOnReadyNavigation}>
            <RootStack />
        </NavigationContainer>
    );
};

export default RootNavigation;
