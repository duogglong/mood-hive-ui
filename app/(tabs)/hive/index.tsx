import { customMapStyle } from '@/configuration/custom-map';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mẫu dữ liệu các user với trạng thái cảm xúc
const users = [
    { id: '1', name: 'Alice', mood: 'happy', latitude: 20.9654, longitude: 105.8349 },
    { id: '2', name: 'Bob', mood: 'sad', latitude: 20.965026, longitude: 105.843163 },
    { id: '3', name: 'Carol', mood: 'angry', latitude: 20.984941, longitude: 105.833929 },
];

// Màu sắc hoặc icon theo trạng thái cảm xúc
const moodColors: Record<string, string> = {
    happy: '#FFD700', // vàng
    sad: '#1E90FF',   // xanh dương
    angry: '#FF4500', // đỏ cam
};

export default function HiveScreen() {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const defaultRegion = {
        latitude: 20.965367,
        longitude: 105.834902,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Quyền truy cập vị trí bị từ chối.');
                    setLoading(false);
                    return;
                }
                const pos = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
                setLocation({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
            } catch (e) {
                setErrorMsg('Không thể lấy vị trí.');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const region = location
        ? {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        }
        : defaultRegion;

    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-white">
            <View className="flex-1">
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ flex: 1 }}
                    initialRegion={region}
                    region={region}
                    showsUserLocation
                    showsMyLocationButton
                    customMapStyle={customMapStyle}
                >
                    {users.map(user => (
                        <Marker
                            key={user.id}
                            coordinate={{ latitude: user.latitude, longitude: user.longitude }}
                            title={user.name}
                            description={user.mood}
                        >
                            <View
                                className="w-8 h-8 rounded-full items-center justify-center"
                                style={{ backgroundColor: moodColors[user.mood] || '#888' }}
                            >
                                <Text className="text-white font-bold text-xs">{user.mood[0].toUpperCase()}</Text>
                            </View>
                        </Marker>
                    ))}
                </MapView>

                {loading && (
                    <View className="absolute inset-0 items-center justify-center bg-white/60">
                        <ActivityIndicator size="large" color="#2563EB" />
                        <Text className="mt-2 text-gray-700">Đang xác định vị trí...</Text>
                    </View>
                )}

                {errorMsg && !loading && (
                    <View className="absolute top-6 left-4 right-4 px-4 py-3 bg-red-100 rounded">
                        <Text className="text-sm text-red-700">{errorMsg}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}