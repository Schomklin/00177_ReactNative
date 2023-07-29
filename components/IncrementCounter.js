import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const IncrementCounter = () => {

    const [age, setAge] = useState(23);

    const increment = () => {
        setAge(a => a + 1);
    }

    return (
        <View>
            <Text style={{ fontSize: 24, fontStyle: 'bold' }}>
                Your age: {age}
            </Text>
        </View>
    )
}

export default IncrementCounter