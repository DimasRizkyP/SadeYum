  import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
  } from 'react-native';
  import React, {useRef} from 'react';
  import { ArrowCircleLeft2, Archive } from 'iconsax-react-native';
  import { ScrollView } from 'react-native-gesture-handler';
  import { fontType, colors } from '../../theme';

  const pempek =
    'https://i.pinimg.com/564x/23/3d/38/233d3832087edd17d843b53a81bb9c26.jpg';

  const Detail = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
      inputRange: [0, 52],
      outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
      inputRange: [0, 52],
      outputRange: [0, 52],
    });
  
  return (
    <ScrollView style={{ flex: 1 }}>
      <Animated.View>
        <ImageBackground source={{ uri: pempek }} style={{ height: 300 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
              marginHorizontal: 30,
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ backgroundColor: 'white', borderRadius: 30 }}>
              <ArrowCircleLeft2 size="28" color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: 'white',
                borderRadius: 30,
                paddingVertical: 5,
                paddingHorizontal: 5,
              }}>
              <Archive size="23" color="black" variant="Outline" />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{
              marginTop: 250,
              marginBottom: 40,
              marginHorizontal: 30,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 32,
                  color: 'white',
                  fontWeight: '500',
                }}>
                Resep Pempek
              </Text>
              <View
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Dengan Aneka Bumbu</Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Animated.View>

      <Animated.ScrollView showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }} 
      
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -30,
          padding: 20,
        }}>
        <View>
        <Text
                style={{
                  fontSize: 32,
                  color: 'black',
                  fontWeight: '500',
                }}>
                Resep Pempek
              </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Bahan-bahan:
          </Text>
          <Text>1.500 gr daging ikan tenggiri</Text>
          <Text>2.600 gr tepung tapioka</Text>
          <Text>3.300 ml air</Text>
          <Text>4.1 bongkol bawang putih</Text>
          <Text>5.2 butir putih telur</Text>
          <Text>6.3 sdm gula pasir</Text>
          <Text>7.40 gr garam 20 gr micin 1 butir telur kocok (untuk isian pempek selam)</Text>
          
          
          {/* Add more ingredients as needed */}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Cara Pembuatan:
          </Text>
          <Text>1. Buat terlebih dahulu saus cukonya. Haluskan bawang putih dan cabai beri, sedikit air. Masukkan ke dalam panci semua bahan saus kecuali gula pasir dan garam. Masak sampai gula merah larut.</Text>
          <Text>2. Masukkan gula dan garam. Masak dengan api kecil selama 15 menit. Angkat dan saring. Blender ikan sampai halus. Masukkan ke dalam baskom aduk dengan 300 ml air.</Text>
          <Text>3. Blender bawang putih dengan sedikit air. Masukkan ke adonan ikan. Tambahkan juga putih telur dan semua bumbunya. Aduk sampai rata. Tambahkan tepung tapiokanya sedikit demi sedikit sambil diaduk sampai rata.</Text>
          <Text>3. Blender bawang putih dengan sedikit air. Masukkan ke adonan ikan. Tambahkan juga putih telur dan semua bumbunya. Aduk sampai rata. Tambahkan tepung tapiokanya sedikit demi sedikit sambil diaduk sampai rata.</Text>
          <Text>3. Blender bawang putih dengan sedikit air. Masukkan ke adonan ikan. Tambahkan juga putih telur dan semua bumbunya. Aduk sampai rata. Tambahkan tepung tapiokanya sedikit demi sedikit sambil diaduk sampai rata.</Text>
          <Text>3. Blender bawang putih dengan sedikit air. Masukkan ke adonan ikan. Tambahkan juga putih telur dan semua bumbunya. Aduk sampai rata. Tambahkan tepung tapiokanya sedikit demi sedikit sambil diaduk sampai rata.</Text>
          <Text>3. Blender bawang putih dengan sedikit air. Masukkan ke adonan ikan. Tambahkan juga putih telur dan semua bumbunya. Aduk sampai rata. Tambahkan tepung tapiokanya sedikit demi sedikit sambil diaduk sampai rata.</Text>
          <Text>3. Blender bawang putih dengan sedikit air. Masukkan ke adonan ikan. Tambahkan juga putih telur dan semua bumbunya. Aduk sampai rata. Tambahkan tepung tapiokanya sedikit demi sedikit sambil diaduk sampai rata.</Text>
          {/* Add more steps as needed */}
        </View>
      </Animated.ScrollView>
    </ScrollView>
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
export default Detail;




