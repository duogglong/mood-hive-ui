import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message mymy',
          tabBarLabel: 'Message',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="message.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hive"
        options={{
          title: 'Hive',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="map.fill" color={color} />,
          tabBarLabel: 'Hive'
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="bell.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //     tabBarButton: HapticTab,
    //     // tabBarInactiveTintColor: 'blue',
    //   }}>
    //   <Tabs.Screen
    //     name="hive"
    //     options={{
    //       title: 'Hive',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="map.fill" color={color} />,
    //       tabBarLabel: 'Hive'
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="message"
    //     options={{
    //       title: 'Message mymy',
    //       tabBarLabel: 'Message',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="message.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="home"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="notification"
    //     options={{
    //       title: 'Notification',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="bell.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="profile"
    //     options={{
    //       title: 'Profile',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
    //     }}
    //   />
    // </Tabs>
  );
}
