import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}>
                        Setting Screen
                    </Text>
                    <Button
                      title='Go to Home'
                      onPress={()=>navigation.goBack()}                    
                    />

                </View>
            </View>
        </SafeAreaView>
    );
};

export default SettingsScreen;
