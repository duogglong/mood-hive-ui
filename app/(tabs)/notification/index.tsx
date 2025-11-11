import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const notifications = [
  {
    id: "1",
    type: "LIKE",
    user: "Emma Watson",
    avatar: "https://i.pravatar.cc/150?img=1",
    message: "liked your photo",
    time: "2h",
  },
  {
    id: "2",
    type: "COMMENT",
    user: "Chris Evans",
    avatar: "https://i.pravatar.cc/150?img=2",
    message: "commented: Awesome!",
    time: "5h",
  },
  {
    id: "3",
    type: "FRIEND_REQUEST",
    user: "Scarlett Johansson",
    avatar: "https://i.pravatar.cc/150?img=3",
    message: "sent you a friend request",
    time: "1d",
  },
  {
    id: "4",
    type: "FRIEND_REQUEST",
    user: "Tom Holland",
    avatar: "https://i.pravatar.cc/150?img=4",
    message: "sent you a friend request",
    time: "2d",
  },
];

export default function NotificationScreen() {
  const renderItem = ({ item }: any) => (
    <View className="flex-row items-center py-3 border-b border-gray-100">
      <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full" />
      <View className="flex-1 ml-3">
        <Text className="text-base text-black">
          <Text className="font-semibold">{item.user}</Text> {item.message}
        </Text>
        <Text className="text-xs text-gray-400">{item.time}</Text>
      </View>

      {item.type === "FRIEND_REQUEST" && (
        <View className="flex-row space-x-2">
          {/* nút Accept */}
          <TouchableOpacity className="w-10 h-10 rounded-lg items-center justify-center mr-2 border border-green-500">
            <Ionicons name="checkmark" size={24} color="green" />
          </TouchableOpacity>

          {/* nút Decline */}
          <TouchableOpacity className="w-10 h-10 rounded-lg items-center justify-center ml-2 border border-red-500">
            <AntDesign name="close" size={20} color="red" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-white pt-14 px-4">
      <Text className="text-2xl font-bold mb-4">Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
