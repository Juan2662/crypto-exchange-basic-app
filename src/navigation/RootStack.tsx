import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#F8F8F8' } }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default RootStack;
