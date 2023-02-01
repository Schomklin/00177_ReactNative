import { 
  View, 
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet
} from 'react-native'
import React,{useState,useEffect} from 'react'

import axios from 'axios';

const ProductScreen = () => {

  const [product,setProduct] = useState([]);

  //จะทำงานเมื่อคลิกที่เมนู Product
  useEffect(()=>{
    //getData() for get data from backend
    const getData = async ()=>{
      const res = await axios.get('https://api.codingthailand.com/api/course')
      //alert(JSON.stringify(res.data.data))
      setProduct(res.data.data);
    }
    //call fucntion getData()
    getData();    
  },[]); //[]ใช้สำหรับดึงข้อมูลแค่รอบเดียวตอนเข้าใช้ component 

  return (
    <View>
      <FlatList
       data = {product}
       keyExtractor = {(item,index)=>item.id.toString()}
       renderItem = {({item})=>(
        <Text>{item.title}</Text>
       )}     
      />
    </View>
  )
}

export default ProductScreen