import { Colors } from '@/constants/colors';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const MENU_ITEMS_USER_INFO = [
  { key: 'profile', label: 'Thông tin cá nhân' },
];

const MENU_ITEMS_HIVE = [
  { key: 'mood-hive', label: 'Hive cảm xúc' },
  { key: 'friends', label: 'Bạn bè' },
  { key: 'groups', label: 'Nhóm' },
];

const MENU_ITEMS_SETTING = [
  { key: 'privacy', label: 'Quyền riêng tư' },
  { key: 'language', label: 'Ngôn ngữ' },
  { key: 'devices', label: 'Thiết bị' },
  { key: 'settings', label: 'Cài đặt' },
];

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="items-center p-6">
        <View className="relative mb-4 mt-14">
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            className="w-32 h-32 rounded-full"
          />

          <TouchableOpacity
            onPress={() => {
              /* TODO: mở modal chọn ảnh hoặc điều hướng chỉnh sửa avatar */
            }}
            className="absolute right-0 bottom-0 w-9 h-9 rounded-full items-center justify-center"
            style={{
              backgroundColor: Colors.primary,
              borderWidth: 2,
              borderColor: '#fff',
            }}
            accessibilityLabel="Chỉnh sửa ảnh đại diện"
          >
            <Feather name="edit-2" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text className="text-2xl font-bold text-gray-900">Nguyễn Văn A</Text>
        <Text className="text-sm text-gray-500">nguyenvana@example.com</Text>
      </View>

      <View className="flex justify-center items-center">
        <View className="w-5/6 mt-6 bg-white border border-gray-300 flex justify-center items-center rounded-2xl">
          {MENU_ITEMS_USER_INFO.map((item, index) => (
            <TouchableOpacity
              key={item.key}
              className={`w-full flex-row items-center justify-between px-4 py-4 ${index < MENU_ITEMS_USER_INFO.length - 1 ? 'border-b border-gray-100' : ''}`}
              onPress={() => {
                /* TODO: điều hướng hoặc mở modal tương ứng */
              }}
            >
              <Text className="text-base text-gray-900 font-medium">{item.label}</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="flex justify-center items-center">
        <View className="w-5/6 mt-6 bg-white border border-gray-300 flex justify-center items-center rounded-2xl">
          {MENU_ITEMS_HIVE.map((item, index) => (
            <TouchableOpacity
              key={item.key}
              className={`w-full flex-row items-center justify-between px-4 py-4 ${index < MENU_ITEMS_HIVE.length - 1 ? 'border-b border-gray-100' : ''}`}
              onPress={() => {
                /* TODO: điều hướng hoặc mở modal tương ứng */
              }}
            >
              <Text className="text-base text-gray-900 font-medium">{item.label}</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="flex justify-center items-center">
        <View className="w-5/6 mt-6 bg-white border border-gray-300 flex justify-center items-center rounded-2xl">
          {MENU_ITEMS_SETTING.map((item, index) => (
            <TouchableOpacity
              key={item.key}
              className={`w-full flex-row items-center justify-between px-4 py-4 ${index < MENU_ITEMS_SETTING.length - 1 ? 'border-b border-gray-100' : ''}`}
              onPress={() => {
                /* TODO: điều hướng hoặc mở modal tương ứng */
              }}
            >
              <Text className="text-base text-gray-900 font-medium">{item.label}</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}