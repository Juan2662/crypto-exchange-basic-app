import { Image, Pressable, Text, View } from 'react-native';
import config from '@config';
import { openUrl } from '@utils/helpers';

const ProfileScreen = () => {
    const handlePressGitHub = () => openUrl(config.githubProfileUrl);
    return (
        <View className="flex-1 bg-slate-50 dark:bg-slate-900">
            <View className="flex-1 items-center justify-center p-6">
                <View className="w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg items-center">
                    <Image
                        source={{ uri: config.avatarProfileUrl }}
                        className="w-32 h-32 rounded-full border-4 border-gray-500"
                    />
                    <Text className="text-3xl font-bold mt-4 text-slate-800 dark:text-white">{config.author}</Text>
                    <Text className="text-slate-500 dark:text-slate-400 mt-1 text-center">{config.authorDescription}</Text>

                    <View className="w-full h-px bg-slate-200 dark:bg-slate-700 my-6" />

                    <Pressable
                        onPress={handlePressGitHub}
                        className="mt-2 bg-[#24292F] py-3 px-6 rounded-xl flex-row items-center justify-center"
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.8 : 1 },
                        ]}
                    >
                        <Text className="text-white font-semibold">Visit GitHub Profile</Text>
                    </Pressable>

                    <Text className="text-xs text-slate-400 dark:text-slate-500 mt-6">App Version: 0.1</Text>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;
