import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import CoinDetailsScreen from '../screens/CoinDetails.screen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'white' },
        }}>
            <Stack.Screen
                name="Main"
                component={TabNavigator}
            />
            <Stack.Screen
                name="CoinDetails"
                component={CoinDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default RootStack;
