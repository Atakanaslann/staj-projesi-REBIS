import React from 'react';
import { View, FlatList,Image } from 'react-native';
import styles from './OrtaKisimStyle'

const App = () => {
  const data = [
    { id: 1, title: 'https://yt3.googleusercontent.com/ytc/AIdro_lwjDkCv9h2naz8jgTnfd-70_rRwiRx1Plnh9nQEEewew=s900-c-k-c0x00ffffff-no-rj' },
    { id: 2, title: 'https://yt3.googleusercontent.com/ytc/AIdro_lwjDkCv9h2naz8jgTnfd-70_rRwiRx1Plnh9nQEEewew=s900-c-k-c0x00ffffff-no-rj' },
    { id: 3, title: 'https://yt3.googleusercontent.com/ytc/AIdro_lwjDkCv9h2naz8jgTnfd-70_rRwiRx1Plnh9nQEEewew=s900-c-k-c0x00ffffff-no-rj' },
    { id: 4, title: 'https://yt3.googleusercontent.com/ytc/AIdro_lwjDkCv9h2naz8jgTnfd-70_rRwiRx1Plnh9nQEEewew=s900-c-k-c0x00ffffff-no-rj' },
    { id: 5, title: 'https://yt3.googleusercontent.com/ytc/AIdro_lwjDkCv9h2naz8jgTnfd-70_rRwiRx1Plnh9nQEEewew=s900-c-k-c0x00ffffff-no-rj' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{uri:item.title}} resizeMode='stretch' style={styles.images}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};



export default App;
