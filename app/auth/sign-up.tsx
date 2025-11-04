import { Button, Text, TextInput, View } from "react-native";

export default function SignUpScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-xl font-bold mb-4">Sign Up</Text>
      <TextInput
        placeholder="Email"
        className="border border-gray-300 w-full p-2 mb-3 rounded"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="border border-gray-300 w-full p-2 mb-3 rounded"
      />
      <Button title="Create Account" onPress={() => {}} />
    </View>
  );
}
