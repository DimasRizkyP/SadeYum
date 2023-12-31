import React, {useState, useEffect,useRef} from 'react';
import {MasakanFavorit} from './data';
import { fontType, colors } from '../../theme';
import {ItemSmall} from '../../components'; import {SearchNormal1} from 'iconsax-react-native';
// import {Home, Category, Profile, Heart,BookSaved} from 'iconsax-react-native';
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
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {ListMasakanFavorit} from '../../components/index';
const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
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
      namaResep: 'Bakso Balap',
      author: 'Anggi',
      image: require('../../pages/Resep/image/bakso.jpg'),
      resep: 'Ayam Goreng Di lengkapi resep - resep seperti ',
    },
    {
      namaResep: 'Nasi Uduk Racing',
      author: 'Nanda',
      image: require('../../pages/Resep/image/nasiuduk.jpg'),
    },
    {
      namaResep: 'Ayam Bebutu',
      author: 'Fernandes',
      image: require('../../pages/Resep/image/ayam.jpg'),
    },
    {
      namaResep: 'Mie Goreng Ayam',
      author: 'Made',
      image: require('../../images/4.jpg'),
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <Animated.ScrollView  showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 40}}>
        <View>
          <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
          <Animated.View style={[recent.container, { transform: [{ translateY: recentY }] }]}>
  <View
    style={{
      flexDirection: 'row',
      marginTop: 30,
      marginHorizontal: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#212121' }}>
      Sade<Text style={{ color: 'green' }}>Yum</Text>
    </Text>
    <View style={{ marginHorizontal: -10 }}>
      <Image source={require('../Resep/image/bel.png')} />
    </View>
  </View>
</Animated.View>


          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              marginHorizontal: 30,
              paddingHorizontal: 20,
              paddingVertical: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
              borderRadius: 20,
              width: 'auto',
              marginBottom: 20,
            }}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Cari Resep</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
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
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={dataTrending}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginLeft: 10}}
              renderItem={({item}) => (
                //header masakan top popular
                <TouchableOpacity
                  style={{
                    marginRight: 5,
                    backgroundColor: '#fff',
                    elevation: 20,
                    paddingHorizontal: 15,
                    paddingVertical: 2,
                    marginBottom: -20,
                    borderRadius: 30,
                    marginLeft: 5,
                    height: 300,
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
          <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 170,
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
                Resep Nusantara Terbaik
              </Text>
            </View>
          <View>
            <FlatList
              data={dataTrending}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginLeft: 10}}
              renderItem={({item}) => (
                //header masakan top popular
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
      </Animated.ScrollView>
    </View>
  );
};
const recent = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  
  
  container:{
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: -60,
    left: 0,
    right: 0,
    elevation: 1000,
  },
});
const styles = StyleSheet.create({
  placeholder: {
    fontSize: 14,
    flexDirection:'row',
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(0.5),
    lineHeight: 18,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
    width: '100%', // atau width: 'auto'
  },
  listCard: {
    paddingHorizontal: 25,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    right: -25,
    left: -25,
    backgroundColor: colors.grey(0.05),
  },
});

export default HomeScreen;
