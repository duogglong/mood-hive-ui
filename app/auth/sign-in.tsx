import Checkbox from 'expo-checkbox'; // Thư viện checkbox dễ dùng trong RN
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ScrollView, Text, TextInput, TouchableOpacity, useColorScheme,
  View
} from 'react-native';

export default function SignIn() {
  const router = useRouter();
  const colorScheme = useColorScheme(); // 'light' hoặc 'dark'
  const [remember, setRemember] = useState(false);
  const { t } = useTranslation();

  const handleSignIn = () => {
    // 1. Xử lý đăng nhập, ví dụ gọi API
    // api.signIn(email, password)...

    // 2. Nếu đăng nhập thành công, điều hướng tới màn Home
    router.replace('/(tabs)/home');
    // router.push('/(tabs)'); // hoặc '/(tabs)' nếu bạn dùng tab navigator
  };

  return (
    <ScrollView
      className={`flex-1 ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 32 }}
    >
      {/* Logo */}
      <View className="flex-row items-center mb-6">
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 32, height: 32, marginRight: 8 }}
        />
        <Text className={`text-2xl font-semibold ${colorScheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Mood Hive
        </Text>
      </View>

      {/* Form Container */}
      <View className={`w-full max-w-md rounded-lg p-6 ${colorScheme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow`}>
        <Text className={`text-xl font-bold mb-6 ${colorScheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {t('signInWithYourAccount')}
        </Text>

        {/* Email */}
        <View className="mb-4">
          <Text className={`text-sm font-medium mb-2 ${colorScheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('yourEmail')}
          </Text>
          <TextInput
            placeholder="name@company.com"
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            keyboardType="email-address"
            autoCapitalize="none"
            className={`w-full px-4 py-3 rounded-lg border ${colorScheme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
          />
        </View>

        {/* Password */}
        <View className="mb-4">
          <Text className={`text-sm font-medium mb-2 ${colorScheme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('password')}
          </Text>
          <TextInput
            placeholder="••••••••"
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            secureTextEntry
            className={`w-full px-4 py-3 rounded-lg border ${colorScheme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
          />
        </View>

        {/* Remember & Forgot */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <Checkbox
              value={remember}
              onValueChange={setRemember}
              className={`w-4 h-4 rounded ${colorScheme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}
            />
            <Text className={`ml-2 text-sm ${colorScheme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>{t('rememberMe')}</Text>
          </View>
          <TouchableOpacity>
            <Text className={`text-sm font-medium ${colorScheme === 'dark' ? 'text-blue-500' : 'text-blue-600'}`}>{t('forgotPassword')}</Text>
          </TouchableOpacity>
        </View>

        {/* Sign in Button */}
        <TouchableOpacity
          className="w-full bg-blue-600 py-3 rounded-lg items-center mb-4"
          activeOpacity={0.8}
          onPress={handleSignIn}
        >
          <Text className="text-white font-medium text-lg">{t('signIn')}</Text>
        </TouchableOpacity>

        {/* Sign up link */}
        <Text className={`text-sm text-center ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {t('dontHaveAccount')}{' '}
          <Text className={`font-medium ${colorScheme === 'dark' ? 'text-blue-500' : 'text-blue-600'}`}>{t('signUp')}</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
