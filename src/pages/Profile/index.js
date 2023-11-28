import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {fontType, colors} from '../../theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import style from './profile.style';
import {Setting2, Edit,AddSquare} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
// import { Home, Category, Profile as ProfileIcon, BookSaved, Heart } from 'iconsax-react-native';

const sotoayam =
  'https://i.pinimg.com/564x/1d/e4/a1/1de4a19e2d70724d71ad912cec05885d.jpg';
const mieayam =
  'https://i.pinimg.com/564x/02/73/7c/02737ced46ba22ab6e21f86aefdbcc28.jpg';

const Profile = () => {
  const navigation = useNavigation();
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
      </View>
      <View style={{flexDirection: 'row'}}>
        {/* Produk */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginBottom: 70,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 5,
            paddingVertical: 7,
            elevation: 5,
            shadowColor: 'black',
            marginRight: 20,
            marginVertical: 10,
          }}>
          <Image
            source={{uri: sotoayam}}
            style={{width: 144, height: 105, borderRadius: 20}}
          />
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Soto Ayam
            </Text>
            <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
              7 hari yang lalu
            </Text>

            {/* Konten lainnya */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginBottom: 70,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 5,
            paddingVertical: 7,
            elevation: 5,
            shadowColor: 'black',
            marginRight: 20,
            marginVertical: 10,
          }}>
          <Image
            source={{uri: sotoayam}}
            style={{width: 144, height: 105, borderRadius: 20}}
          />
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Soto Ayam
            </Text>
            <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
              7 hari yang lalu
            </Text>

            {/* Konten lainnya */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginBottom: 70,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 5,
            paddingVertical: 7,
            elevation: 5,
            shadowColor: 'black',
            marginRight: 20,
            marginVertical: 10,
          }}>
          <Image
            source={{uri: mieayam}}
            style={{width: 144, height: 105, borderRadius: 20}}
          />
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Mie ayam
            </Text>
            <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
              2 hari yang lalu
            </Text>

            {/* Konten lainnya */}
          </View>
        </TouchableOpacity>
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
