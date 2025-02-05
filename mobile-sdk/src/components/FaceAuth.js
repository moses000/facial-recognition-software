import React from "react";
import { View, Button } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const FaceAuth = ({ onSuccess }) => {
    const devices = useCameraDevices();
    const camera = devices.front;

    if (!camera) return <View>No Front Camera</View>;

    return (
        <View>
            <Camera device={camera} style={{ width: 300, height: 300 }} isActive={true} />
            <Button title="Capture Face" onPress={() => console.log("Capture Logic Here")} />
        </View>
    );
};

export default FaceAuth;
