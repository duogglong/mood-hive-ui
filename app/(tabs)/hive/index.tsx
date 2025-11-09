// ...existing code...
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { customMapStyle } from '../../../configuration/custom-map';

export default function HiveScreen() {
    interface LocationState {
        latitude: number;
        longitude: number;
    }
    const [location, setLocation] = useState<LocationState | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const defaultRegion = {
        latitude: 21.0285,
        longitude: 105.8542,
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
                setLocation({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                });
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
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
        : defaultRegion;

    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} className="flex-1 bg-white">
            <View className='flex-1'>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={StyleSheet.absoluteFill}
                    initialRegion={region}
                    region={region}
                    showsUserLocation
                    showsMyLocationButton
                    customMapStyle={customMapStyle}
                />
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