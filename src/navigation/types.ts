import { RouteProp } from '@react-navigation/native';
import type { CoinsData } from '../store/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Main: undefined;
    CoinDetails: CoinsData;
};

export declare type RouteNamesKeys = keyof RootStackParamList;

export declare type ScreenNavigationProp<RouteName extends RouteNamesKeys> =
	NativeStackNavigationProp<RootStackParamList, RouteName>;
export declare type ScreenRouteProp<RouteName extends RouteNamesKeys> = RouteProp<
    RootStackParamList,
    RouteName
>;
