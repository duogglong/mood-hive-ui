import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignIn() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-4">Đăng nhập</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 w-3/4 mb-3"
        placeholder="Email"
      />
      <TextInput
        className="border border-gray-300 rounded-lg p-3 w-3/4 mb-3"
        placeholder="Mật khẩu"
        secureTextEntry
      />
      <TouchableOpacity className="bg-blue-500 px-4 py-3 rounded-lg w-3/4 items-center">
        <Text className="text-white font-semibold">Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}
