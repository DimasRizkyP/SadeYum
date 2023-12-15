import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {AddCircle, Heart} from 'iconsax-react-native';
const MasakanFavorit = ({item, variant, onPress}) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        elevation: 10,
        shadowColor: 'black',
        marginLeft: 24,
        top: -3,
        gap: 5,
      }}>
      <Image
        source={{uri: item.image}}
        style={{width: 144, height: 105, borderRadius: 20}}
      />

      <Text style={{fontSize: 14, color: 'red'}}>{item.kategori}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 12, color: 'black'}}>{item.khas}</Text>
        <AddCircle color="rgb(0, 88, 47)" variant="Linear" size={24} />
      </View>
    </TouchableOpacity>
  );
};
const ListMasakanFavorit = ({data}) => {
  const [love, setLove] = useState([]);
  const toggleLove = itemId => {
    if (love.includes(itemId)) {
      setLove(love.filter(id => id !== itemId));
    } else {
      setLove([...love, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = love.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <MasakanFavorit
        item={item}
        variant={variant}
        onPress={() => toggleLove(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 0}} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListMasakanFavorit;
