import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: 'absolute',
          height: 72,
          borderRadius: 5,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOpacity: 0.1,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =>
            <Feather name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message mymy',
          tabBarLabel: 'Message',
          tabBarIcon: ({ color }) =>
            <AntDesign name="message" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="hive"
        options={{
          title: 'Hive',
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 55,
                height: 55,
                borderRadius: 40,
                backgroundColor: focused ? '#fff' : '#f8f8f8',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 28, // lùi lên trên
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3.5,
                elevation: 5,
              }}
            >
              <MaterialIcons
                name="hive"
                size={30}
                color={focused ? '#00c8ffff' : '#888'}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) =>
            <Ionicons name="notifications-outline" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) =>
            <FontAwesome6 name="user-circle" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}
