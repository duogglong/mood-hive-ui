import React, { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const onlineUsers = [
    { id: "1", name: "Emma", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: "2", name: "Chris", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: "3", name: "Scarlett", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: "4", name: "Tom", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: "5", name: "Zendaya", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: "6", name: "Robert", avatar: "https://i.pravatar.cc/150?img=6" },
];

const chats = [
    {
        id: "1",
        name: "Emma Watson",
        lastMessage: "Let’s meet tomorrow 🌿",
        time: "2h",
        avatar: "https://i.pravatar.cc/150?img=1",
        online: true,
    },
    {
        id: "2",
        name: "Chris Evans",
        lastMessage: "Got it, thanks bro!",
        time: "5h",
        avatar: "https://i.pravatar.cc/150?img=2",
        online: false,
    },
    {
        id: "3",
        name: "Scarlett Johansson",
        lastMessage: "See you soon ❤️",
        time: "1d",
        avatar: "https://i.pravatar.cc/150?img=3",
        online: true,
    },
    {
        id: "4",
        name: "Tom Holland",
        lastMessage: "Haha 😂",
        time: "2d",
        avatar: "https://i.pravatar.cc/150?img=4",
        online: false,
    },
];

export default function MessageScreen() {
    const [search, setSearch] = useState("");

    const renderItem = ({ item }: any) => (
        <TouchableOpacity
            className="flex-row items-center py-3 border-b border-gray-100"
            onPress={() => console.log("Open chat with", item.name)}
        >
            <View className="relative">
                <Image source={{ uri: item.avatar }} className="w-14 h-14 rounded-full" />
                {item.online && (
                    <View className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                )}
            </View>

            <View className="flex-1 ml-3">
                <Text className="text-base font-semibold text-black">{item.name}</Text>
                <Text className="text-sm text-gray-500" numberOfLines={1}>
                    {item.lastMessage}
                </Text>
            </View>

            <Text className="text-xs text-gray-400">{item.time}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-white px-4 pt-14">
            {/* 🔍 Search Bar */}
            <View className="flex-row items-center bg-gray-100 rounded-full px-3 py-2 mb-4 h-12">
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Tìm kiếm tin nhắn hoặc người dùng"
                    placeholderTextColor="#999"
                    className="ml-2 text-gray-800"
                />
            </View>

            {/* 🟢 Online Users Row */}
            <FlatList
                data={onlineUsers}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                className="max-h-24"
                renderItem={({ item }) => (
                    <View className="items-center mr-4 h-24">
                        <View className="relative">
                            <Image source={{ uri: item.avatar }} className="w-16 h-16 rounded-full" />
                            <View className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                        </View>
                        <Text className="text-xs mt-1 text-gray-700">{item.name}</Text>
                    </View>
                )}
            />
            {/* 💬 Chat List */}
            <Text className="text-2xl font-bold mb-4">Messages</Text>
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
