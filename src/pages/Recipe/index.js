import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image,ActivityIndicator} from 'react-native';
import {MasakanFavorit} from './data';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {KontenProfil} from '../../components';
import firestore from '@react-native-firebase/firestore';
import {fontType, colors} from '../../theme';

const photocoffe =
  'https://i.pinimg.com/564x/81/90/3d/81903d3b630263edb5ce0c3ae726d3dd.jpg';
const lontongbalap =
  'https://i.pinimg.com/564x/6c/9d/23/6c9d2312e078556952f2841f9af29f89.jpg';
const sotoayam =
  'https://i.pinimg.com/564x/1d/e4/a1/1de4a19e2d70724d71ad912cec05885d.jpg';
const mieayam =
  'https://i.pinimg.com/564x/02/73/7c/02737ced46ba22ab6e21f86aefdbcc28.jpg';
const ikankuahpalabanda =
  'https://i.pinimg.com/736x/be/22/49/be224911dda1d0bc4c9a111e9250517d.jpg';
const ayampedasjeruklimau =
  'https://i.pinimg.com/564x/e3/36/86/e336869ea22e173055b83f934278260b.jpg'; // Ganti URL gambar dengan URL yang valid
const Gulaibelancaudang =
  'https://i.pinimg.com/564x/89/18/b9/8918b9566678d231d2fe75259516c0fe.jpg';
const rendang =
  'https://i.pinimg.com/564x/a7/36/7c/a7367c5176763a0073457e422f9980c2.jpg';
const pempek =
  'https://i.pinimg.com/564x/23/3d/38/233d3832087edd17d843b53a81bb9c26.jpg';
const karedok =
  'https://i.pinimg.com/564x/0f/62/99/0f62993a509a380e2c216d4b21740727.jpg';


const Recipe = ({item, variant, onPress}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  useEffect(() => {
    console.log(blogData);
  }, [blogData]);

  
  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <ScrollView>
        <View style={{flex: 1, marginTop: 30}}>
          <View style={{marginLeft: 30, marginTop: 20}}>
            <Text style={{fontWeight: '600', color: 'black'}}>
              Daftar Resep
            </Text>
            <View style={{flexDirection: 'row'}}>
              {/* Produk */}
              <TouchableOpacity activeOpacity={0.7} 
                style={{ 
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}
                onPress={() => navigation.navigate('Detail')}>
                <Image
                  source={{uri: pempek}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Pempek
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}
                onPress={() => navigation.navigate('Lontong')}>
                <Image
                  source={{uri: lontongbalap}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Lontong Balap
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* Produk */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
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
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
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
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* Produk */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: ikankuahpalabanda}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Ikan Kuah Pala Banda
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: ayampedasjeruklimau}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Ayam Pedas Limau
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* Produk */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: Gulaibelancaudang}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Gulai Belanca Udang
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: rendang}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Rendang
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* Produk */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: photocoffe}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Sayur Sop
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  elevation: 5,
                  shadowColor: 'black',
                  marginRight: 20,
                  marginVertical: 10,
                }}>
                <Image
                  source={{uri: karedok}}
                  style={{width: 144, height: 105, borderRadius: 20}}
                />
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                    Karedok
                  </Text>
                  <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
                    Lihat lebih Lanjut
                  </Text>

                  {/* Konten lainnya */}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <KontenProfil item={item} key={index} />)
          )}
        </View>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default Recipe;