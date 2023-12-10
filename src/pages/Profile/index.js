import React, { useState, useCallback } from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet,ActivityIndicator, RefreshControl } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { fontType, colors } from '../../theme';
import { Setting2, Edit, AddSquare } from 'iconsax-react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios'; // Tambahkan impor untuk axios
import style from './profile.style';
import {ItemSmall} from '../../components';


const sotoayam =
  'https://i.pinimg.com/564x/1d/e4/a1/1de4a19e2d70724d71ad912cec05885d.jpg';
const mieayam =
  'https://i.pinimg.com/564x/02/73/7c/02737ced46ba22ab6e21f86aefdbcc28.jpg';

const Profile = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        'https://656b20d3dac3630cf727ba2e.mockapi.io/sadeyum/blog',
      );
      setBlogData(response.data);
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, [])
  );
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={Colors.gray} />
      <View style={style.cover}>
        <Image source={require('../Resep/image/bg.jpg')} style={style.cover} />
      </View>
      <View style={style.profilContainer}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Resep/image/muka.jpg')}
            style={style.profile}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 20,
              color: 'black',
            }}>
            Dimas Rizky Pratama
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', marginRight: 20}}>
          <Text style={style.menuText}>Menu Yang Telah Dilihat</Text>
        </View>
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <ItemSmall item={item} key={index} />)
          )}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('AddBlog')}>
          <AddSquare color={colors.white()} variant="Outline" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  floatingButton: {
    backgroundColor: colors.green(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 15},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize',
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});



