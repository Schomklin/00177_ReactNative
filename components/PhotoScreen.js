import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const accessKey = 'l-pJw4NFOffavlp60apfNbdTLm0rnBDryN3PiDPWtQ0'; // แทนที่ด้วยคีย์ API ที่คุณได้รับจาก Unsplash

const PhotoScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        });
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={photos}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item.urls.regular }} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
});

export default PhotoScreen;
