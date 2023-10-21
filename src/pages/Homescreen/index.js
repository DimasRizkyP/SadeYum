import React, {useState, useEffect} from 'react';
import {MasakanFavorit} from './data';
import {Home, Category, Profile, Heart,BookSaved} from 'iconsax-react-native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import {ListMasakanFavorit} from '../../components/index';
const HomeScreen = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'Masakan jawa',
    },
    {
      nama: 'Masakan Pedas',
    },
    {
      nama: 'Masakan khas timur',
    },
    {
      nama: 'Masakan Aceh',
    },
    {
      nama: 'Olahan Makanan Ringan',
    },
    {
      nama: 'Khas Papua',
    },
    {
      nama: 'Khas Lombok',
    },
  ]);

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'Ayam',
  });

  const [dataTrending, setDataTrending] = useState([
    {
      namaResep: 'Ayam Goreng Mantap',
      author: 'Anggi',
      image: require('../../images/1.jpg'),
      resep: 'Ayam Goreng Di lengkapi resep - resep seperti ',
    },
    {
      namaResep: 'Ayam Goreng Rica Rica',
      author: 'Nanda',
      image: require('../../images/2.jpg'),
    },
    {
      namaResep: 'Ayam Goreng Telur',
      author: 'Fernandes',
      image: require('../../images/3.jpg'),
    },
    {
      namaResep: 'Mie Goreng Ayam',
      author: 'Made',
      image: require('../../images/4.jpg'),
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <ScrollView>
        <View>
          <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              marginHorizontal: 30,
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
            }}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
              Sade<Text style={{color: 'green'}}>Yum</Text>
            </Text>
            <View style={{marginHorizontal: -10}}>
              <Image source={require('../Resep/image/bel.png')} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              marginHorizontal: 30,
              paddingHorizontal: 20,
              paddingVertical: 2,
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
              borderRadius: 20,
              width: 'auto',
              marginBottom: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../Resep/image/Group.png')} />
              <TextInput
                placeholder="Cari Resep..."
                placeholderTextColor="#000"
              />
              <Image
                source={require('../Resep/image/mi_filter.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 30,
                  marginHorizontal: 165,
                }}
              />
            </View>
            <View></View>
          </View>
          <View>
            <FlatList
              data={kategori}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginLeft: 24}}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    marginRight: 5,
                    backgroundColor:
                      kategoriSeleksi.nama == item.nama ? '#00582F' : '#fff',
                    elevation: 3,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    marginBottom: 10,
                    borderRadius: 15,
                    marginLeft: 5,
                  }}
                  onPress={() => setKategoriSeleksi(item)}>
                  <Text
                    style={{
                      color:
                        kategoriSeleksi.nama == item.nama ? '#fff' : '#212121',
                    }}>
                    {item.nama}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#212121',
              marginLeft: 26,
              bottom: 5,
            }}>
            Masakan Terfavorit
          </Text>

          <ListMasakanFavorit data={MasakanFavorit} />

          {/* dari sini */}
          <View
            style={{
              top: 10,
              marginHorizontal: 20,
              marginBottom: 20,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
                Masakan Top Polular
              </Text>
            </View>

            <TouchableOpacity
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 14}}>Lihat Semua</Text>
              {/* <Icon name="chevron-forward" size={20} color="#bdbdbd" /> */}
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={dataTrending}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginLeft: 10}}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    marginRight: 5,
                    backgroundColor: '#fff',
                    elevation: 30,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    marginBottom: -20,
                    borderRadius: 30,
                    marginLeft: 5,
                    height: 340,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 200,
                      height: 150,
                      marginTop: 10,
                      marginBottom: 10,
                      borderRadius: 30,
                    }}
                    resizeMode={'stretch'}
                  />
                  <Text
                    style={{
                      color: '#212121',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    {item.namaResep}
                  </Text>
                  <Text>{item.author}</Text>
                  <Text
                    style={{
                      color: '#212121',
                      fontSize: 10,
                    }}>
                    <Text>{item.resep}</Text>
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Home color="rgb(0, 88, 47)" variant="Linear" size={24} />
          <Text style={{color: 'rgb(0, 88, 47)'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Category color="rgb(0, 88, 47)" variant="Linear" size={24} />
          <Text style={{color: 'rgb(0, 88, 47)'}}>Peralatan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <BookSaved color="rgb(0, 88, 47)" variant="Linear" size={24} />
          <Text style={{color: 'rgb(0, 88, 47)'}}>Artikel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
