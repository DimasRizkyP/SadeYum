import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import style from './profile.style';
// import { Home, Category, Profile as ProfileIcon, BookSaved, Heart } from 'iconsax-react-native';


const sotoayam =
  'https://i.pinimg.com/564x/1d/e4/a1/1de4a19e2d70724d71ad912cec05885d.jpg';
const mieayam =
  'https://i.pinimg.com/564x/02/73/7c/02737ced46ba22ab6e21f86aefdbcc28.jpg';

const Profile = () => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={Colors.gray} />
      <View style={style.cover}>
        <Image
          source={require('../Resep/image/bg.jpg')}
          style={style.cover}
        />
      </View>
      <View style={style.profilContainer}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Resep/image/muka.jpg')}
            style={style.profile}
          />
          <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 20, color: 'black' }}>Dimas Rizky Pratama</Text>
        </View>
        <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
          <Text style={style.menuText}>Menu Yang Telah Dilihat</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
              {/* Produk */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    marginBottom:70,
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
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
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
                    marginBottom:70,
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
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
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
                                  marginBottom:70,
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
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Mie ayam
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    2 hari yang lalu
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>
            </View>
      

      {/* <View style={{ flexDirection: 'row', paddingTop: 5, backgroundColor: '#FFFFFF' }}>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Home color="rgb(0, 88, 47)" variant="Linear" size={23} />
          <Text style={{ color: 'rgb(0, 88, 47)' }}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Category color="rgb(0, 88, 47)" variant="Linear" size={23} />
          <Text style={{ color: 'rgb(0, 88, 47)' }}>Resep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ProfileIcon color="rgb(0, 88, 47)" variant="Linear" size={23} />
          <Text style={{ color: 'rgb(0, 88, 47)' }}>Profile</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Profile;
