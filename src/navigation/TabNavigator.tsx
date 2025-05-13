import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import ExploreScreen from '@screens/Explore.screen';
import ProfileScreen from '@screens/Profile.screen';
const Tab = createNativeBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
            }}
        >
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: () => ({ sfSymbol: 'chart.bar' }),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => ({ sfSymbol: 'person' }),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
