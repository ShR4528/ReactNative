import axios from 'axios';
import React from 'react';
import {StatusBar, Image, Text, View, FlatList } from 'react-native';
import { Post } from './components/Post';




export default function App() {
  const [isLoading, setIsLoading ] = React.useState(false);
 const [items, setItems ] = React.useState();
 
 React.useEffect(() => {
  axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((  {data} ) => {
    setItems(data);
  }).catch(err => {
    console.log(err);
    alert('error')
  })
 }, []);


  return (
  <View>
    <FlatList 
    data={items}
    renderItem={({ item }) => (
      <Post 
    title={item.title}
    body={item.body}
    imageUrl="https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
    />
    )}
    />
    
    <StatusBar theme="auto" />
    </View>
  );
}