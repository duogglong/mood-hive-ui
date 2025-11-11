import { Colors } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from "react";
import { Animated, Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Comment {
  id: string;
  user: string;
  text: string;
  time: string;
}

interface Post {
  id: string;
  user: string;
  avatar: string;
  images: string[];
  caption: string;
  likes: number;
  time: string;
  comments: Comment[];
}

const stories = [
  { id: "1", name: "Emma", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "2", name: "Chris", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: "3", name: "Scarlett", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: "4", name: "Tom", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: "5", name: "Zendaya", avatar: "https://i.pravatar.cc/150?img=5" },
];

const posts: Post[] = [
  {
    id: "1",
    user: "Emma Watson",
    avatar: "https://i.pravatar.cc/150?img=1",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
    ],
    caption: "Enjoying the sun! 🌞",
    likes: 120,
    time: "2h",
    comments: [
      { id: "c1", user: "Chris Evans", text: "Looking great!", time: "1h" },
      { id: "c2", user: "Scarlett Johansson", text: "Beautiful pic ❤️", time: "30m" },
    ],
  },
  {
    id: "2",
    user: "Chris Evans",
    avatar: "https://i.pravatar.cc/150?img=2",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
    ],
    caption: "Amazing day at the beach! 🏖️",
    likes: 98,
    time: "5h",
    comments: [
      { id: "c3", user: "Emma Watson", text: "Looks fun!", time: "4h" },
    ],
  },
  {
    id: "3",
    user: "Scarlett Johansson",
    avatar: "https://i.pravatar.cc/150?img=3",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
    ],
    caption: "Coffee time ☕",
    likes: 200,
    time: "1d",
    comments: [
      { id: "c4", user: "Tom Holland", text: "Yummy!", time: "22h" },
      { id: "c5", user: "Zendaya", text: "Love it ❤️", time: "20h" },
    ],
  },
  {
    id: "4",
    user: "Tom Holland",
    avatar: "https://i.pravatar.cc/150?img=4",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
    ],
    caption: "Hiking adventures 🏔️",
    likes: 75,
    time: "2d",
    comments: [
      { id: "c6", user: "Chris Evans", text: "Wow amazing view!", time: "1d" },
    ],
  },
  {
    id: "5",
    user: "Zendaya",
    avatar: "https://i.pravatar.cc/150?img=5",
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
    ],
    caption: "New outfit 😎",
    likes: 180,
    time: "3d",
    comments: [
      { id: "c7", user: "Scarlett Johansson", text: "So stylish!", time: "2d" },
      { id: "c8", user: "Emma Watson", text: "Love it 💖", time: "2d" },
      { id: "234", user: "Emma Watson", text: "Love it 💖", time: "2d" },
      { id: "23432", user: "Emma Watson", text: "Love it 💖", time: "2d" },
      { id: "24333", user: "Emma Watson", text: "Love it 💖", time: "2d" },
    ],
  },
];

export default function HomeScreen() {
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const [activeImageIndex, setActiveImageIndex] = useState<{ [postId: string]: number }>({});

  const renderPost = ({ item }: any) => (
    <View className="mb-3">
      {/* Header: avatar + username */}
      <View className="flex-row items-center px-4 py-3">
        <Image source={{ uri: item.avatar }} className="w-10 h-10 rounded-full" />
        <Text className="ml-3 font-semibold text-black">{item.user}</Text>
      </View>

      {/* Post images */}
      <View className="relative">
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="h-64 bg-gray-200"
          onScroll={(event) => {
            const scrollX = event.nativeEvent.contentOffset.x;
            const currentIndex = Math.round(scrollX / SCREEN_WIDTH);
            setActiveImageIndex(prev => ({ ...prev, [item.id]: currentIndex }));
          }}
          scrollEventThrottle={16}
        >
          {item.images.map((img: string, index: number) => (
            <Image
              key={index}
              source={{ uri: img }}
              style={{ width: SCREEN_WIDTH, height: 256 }}
              resizeMode="cover"
            />
          ))}
        </Animated.ScrollView>

        {/* Mini slide bar */}
        <View className="absolute bottom-[-12] left-2 right-2 flex-row justify-center space-x-1">
          {item.images.map((_: any, i: number) => (
            <View
              key={i}
              className="flex-1 rounded-full mx-1 h-1 max-w-1"
              style={{
                backgroundColor: i === (activeImageIndex[item.id] || 0) ? Colors.primary : Colors.textSecondary,
                marginRight: i < item.images.length - 1 ? 2 : 0,
              }}
            />
          ))}
        </View>
      </View>

      {/* Action buttons */}
      <View className="flex-row items-center px-4 py-3 space-x-4">
        <TouchableOpacity className="mr-2 flex-row items-center">
          <Feather name="heart" size={24} color="black" />
          <Text className="ml-1 text-black font-bold text-base">{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mx-2 flex-row items-center">
          <AntDesign name="comment" size={24} color="black" />
          <Text className="ml-1 text-black font-bold text-base">{item.comments.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="ml-2">
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Likes & caption */}
      <View className="px-4">
        <Text className="text-gray-700">{item.caption}</Text>

        {/* Comments */}
        {item.comments && item.comments.length > 0 && (
          <View className="mt-2">
            {/* Hiển thị comment đầu tiên */}
            <Text className="text-gray-700">
              <Text className="font-semibold">{item.comments[0].user} </Text>
              {item.comments[0].text}
              <Text className="text-gray-400 text-xs"> • {item.comments[0].time}</Text>
            </Text>

            {/* Nếu có nhiều comment, hiển thị View all */}
            {item.comments.length > 1 && (
              <Text className="text-gray-400 text-xs mt-1">
                View all {item.comments.length} comments
              </Text>
            )}
          </View>
        )}

        <Text className="text-gray-400 text-xs mt-1">{item.time}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderPost}
      showsVerticalScrollIndicator={false}
      className="mt-10 bg-white"
      ListHeaderComponent={
        <View className="py-4 border-b border-gray-200">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {stories.map((story) => (
              <View key={story.id} className="items-center mr-4">
                <Image
                  source={{ uri: story.avatar }}
                  className="w-16 h-16 rounded-full border-2 border-pink-500"
                />
                <Text className="text-xs mt-1">{story.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      }
      onEndReached={() => setHasScrolledToEnd(true)} // Khi lướt tới cuối
      onEndReachedThreshold={1} // 0.5 = khi còn 50% phía dưới
      ListFooterComponent={() =>
        hasScrolledToEnd ? (
          <View className="py-4 items-center">
            <Text className="text-gray-500 font-semibold">
              ✓ Bạn đã đọc hết bài viết mới hôm nay
            </Text>
          </View>
        ) : null
      }
    />
  );
}
