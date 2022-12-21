<<<<<<< HEAD
import { TextInput, Button } from "react-native";
import React, { useState } from "react";

const CreatePost = ({navigation}) => {
  const [postText, setPostText] = useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="Please text here!!!"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
       title="Done"
       onPress={()=>{
        navigation.navigate('HomePost',{post:postText})
       }}      
      />
    </>
  );
};

export default CreatePost;
=======
import { TextInput,Button} from 'react-native'
import React from 'react'

function CreatePost({ navigation }) {

    const [postText, setPostText] = React.useState('');

    return (
        <>    
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass params back to home screen
                    navigation.navigate('HomePost', { post: postText });
                }}
            />
        </>
    );
}


export default CreatePost
>>>>>>> 7bf3e57 (Commit Date[21-12-2022])
