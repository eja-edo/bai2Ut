import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { Camera } from "expo-camera";

const ScanScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Camera.requestCameraPermissionsAsync();
                setHasPermission(status === "granted");
                if (status !== "granted") {
                    Alert.alert("Quyền truy cập camera bị từ chối", "Vui lòng cấp quyền trong cài đặt.");
                }
            } catch (error) {
                console.error("Lỗi khi yêu cầu quyền camera:", error);
                setHasPermission(false);
            }
        })();
    }, []);

    const handleBarCodeScanned = useCallback(({ type, data }) => {
        if (!scanned) {
            setScanned(true);
            Alert.alert("✅ Scan thành công!", `Mã: ${data}`, [
                { text: "OK", onPress: () => setScanned(false) },
            ], { onDismiss: () => setScanned(false) });
        }
    }, [scanned]);

    if (!Camera || !Camera.Constants || !Camera.Constants.Type) {
        return (
            <View style={styles.center}>
                return (
                <View style={styles.errorContainer}>
                    <Image source={require("../assets/orange-juice.png")} style={styles.productImage} />
                    <Text style={styles.errorText}>🚫 Không có quyền truy cập camera!</Text>
                    <TouchableOpacity
                        onPress={async () => {
                            const { status } = await Camera.requestCameraPermissionsAsync();
                            setHasPermission(status === "granted");
                        }}
                        style={styles.permissionButton}
                    >
                        <Text style={styles.permissionText}>Cấp lại quyền</Text>
                    </TouchableOpacity>
                </View>
                );
            </View>
        );
    }

    if (hasPermission === null) {
        return (
            <View style={styles.center}>
                <Text>📸 Đang kiểm tra quyền truy cập camera...</Text>
            </View>
        );
    }

    if (hasPermission === false) {
        return (
            <View style={styles.errorContainer}>
                <Image source={require("../assets/orange-juice.png")} style={styles.productImage} />
                <Text style={styles.errorText}>🚫 Không có quyền truy cập camera!</Text>
                <TouchableOpacity
                    onPress={async () => {
                        const { status } = await Camera.requestCameraPermissionsAsync();
                        setHasPermission(status === "granted");
                    }}
                    style={styles.permissionButton}
                >
                    <Text style={styles.permissionText}>Cấp lại quyền</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const cameraType = Camera?.Constants?.Type?.back ?? "back";

    return (
        <View style={styles.container}>
            <Camera
                style={{ flex: 1 }}
                type={cameraType}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation?.goBack()}
            >
                <Text style={styles.buttonText}>🔙 Quay lại</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    errorContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    productImage: { width: '110%', height: '110%', position: "absolute" },
    errorText: { fontSize: 18, fontWeight: "bold", color: "red", textAlign: "center" },
    errorSubText: { fontSize: 14, color: "gray", textAlign: "center" },
    permissionButton: {
        marginTop: 10,
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 5,
    },
    permissionText: { color: "white", fontSize: 16, fontWeight: "bold" },
    backButton: {
        position: "absolute",
        bottom: 50,
        backgroundColor: "#ff5733",
        padding: 15,
        borderRadius: 10,
    },
    buttonText: { color: "white", fontSize: 16 },
});

export default ScanScreen;
