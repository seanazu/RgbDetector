import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
    View,
} from 'react-native';

const CustomButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={props.onPressFunction}
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#00000050', borderless: false,}}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#dddddd' : props.color },
                    styles.button,
                    { ...props.style }
                ]}
            >
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 10, 
        overflow: 'hidden'
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
    },
})

export default CustomButton;