import React, { useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import CustomButton from '../components/CustomButton';

const CameraScreen = () => {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [rgb, setRgb] = useState(0)

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri)
            RNFS.readFile(data.uri, "base64").then(data => {
                let len = data.length;
                let bytes = new Uint8Array(len);
                console.log('hello')
                getAverageColor(bytes, 4)
              });
        } catch (error) {
            console.log(error);
        }

        const getAverageColor = (uintImage, ratio) =>{
            let i = -4, count = 0
            let data, length
            try {
                data = uintImage
                length = data.length
            } catch (err) {
                console.error(err)
                return {
                    R: 0,
                    G: 0,
                    B: 0
                }
            }
            let R, G, B
            R = G = B = 0
        
            while ((i += ratio * 4) < length) {
                ++count
        
                R += data[i]
                G += data[i + 1]
                B += data[i + 2]
            }
        
            R = ~~(R / count)
            G = ~~(G / count)
            B = ~~(B / count)
        
            setRgb(`${R}--${G}--${B}`)
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <CustomButton
                    title={`Capture + ${rgb}`}
                    color='#1eb900'
                    onPressFunction={captureHandle}
                />
            </RNCamera>
        </View>
    );
}

export default CameraScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});