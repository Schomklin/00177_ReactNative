import {TextInput,Button, View} from 'react-native'
import React from 'react'

const CreatePostScreen = ({ navigation}) => {
    const [postText, setPostText] = React.useState('');
    return (
        <View>
            <TextInput
                multiline
                placeholder="Please say something about React Native"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name: 'Index',
                        params: { post: postText },
                        merge: true,
                    });
                }}
            />
        </View>
    );
}

export default CreatePostScreen