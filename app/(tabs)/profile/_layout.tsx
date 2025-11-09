import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Màn hình chính của tab profile */}
      <Stack.Screen name="index" />

      {/* Màn hình cài đặt */}
      {/* <Stack.Screen name="settings" /> */}
    </Stack>
  );
}