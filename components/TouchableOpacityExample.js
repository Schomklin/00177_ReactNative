import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const TouchableOpacityExample = () => {
    const [count, setCount] = useState(0);

    const onPress = () => setCount(count + 1);

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Count: {count}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
});

export default TouchableOpacityExample