import { useColorScheme, StatusBar } from 'react-native';

const StatusBarApp = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />;
};

export default StatusBarApp;
