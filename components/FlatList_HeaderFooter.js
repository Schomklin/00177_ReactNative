// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';

const FlatList_HeaderFooter = () => {
    const [dataSource, setDataSource] = useState([
        { id: 1, title: 'Button' },
        { id: 2, title: 'Card' },
        { id: 3, title: 'Input' },
        { id: 4, title: 'Avatar' },
        { id: 5, title: 'CheckBox' },
        { id: 6, title: 'Header' },
        { id: 7, title: 'Icon' },
        { id: 8, title: 'Lists' },
        { id: 9, title: 'Rating' },
        { id: 10, title: 'Pricing' },
        { id: 11, title: 'Avatar' },
        { id: 12, title: 'CheckBox' },
        { id: 13, title: 'Header' },
        { id: 14, title: 'Icon' },
        { id: 15, title: 'Lists' },
    ]);

    const EmptyListMessage = ({item})=>{
        return(
            <Text
             style={styles.emptyListStyle}
             onPress={() => getItem(item)}            
            >
                No Data Found
            </Text>
        )

    }

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}
            >
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const ListHeader = ()=>{
        //View to sett in Header
        return(
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    React Native Component
                </Text>
            </View>
        )
    }

    const ListFooter = ()=>{
        //View to sett in Footer
        return(
            <View style={styles.headerFooterStyle}>
                <Text style={styles.textStyle}>
                    Thai-Nichi Institute of Technology
                </Text>
            </View>
        )
    }


    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={dataSource}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}
                renderItem={ItemView}
                ListEmptyComponent={EmptyListMessage}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    itemStyle: {
        padding: 10,
    },
    headerFooterStyle: {
        width: '100%',
        height: 45,
        backgroundColor: '#606070',
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },
});

export default FlatList_HeaderFooter


