import { ComponentProps, forwardRef } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { CloseIcon } from '@assets/icons';

type SearchInputProps = {
    onPressClose?: () => void;
} & ComponentProps<typeof TextInput>;

const SearchInput = forwardRef<TextInput, SearchInputProps>((props, ref) => {
    return (
        <View className="flex-row items-center justify-center w-full relative">
            <TextInput
                placeholder="Search..."
                returnKeyType="search"
                className="bg-gray-200 rounded-md px-5 py-4 w-full"
                {...props}
                ref={ref}
            />
            <Pressable onPress={props.onPressClose} className="absolute right-4">
                <CloseIcon width={20} height={20} />
            </Pressable>
        </View>
    );
});

SearchInput.displayName = 'SearchInput';


export default SearchInput;
