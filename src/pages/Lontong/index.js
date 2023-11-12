import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import { ArrowCircleLeft2, Archive } from 'iconsax-react-native';
  import { ScrollView } from 'react-native-gesture-handler';
  
  const lontongbalap =
  'https://i.pinimg.com/564x/6c/9d/23/6c9d2312e078556952f2841f9af29f89.jpg';
  
  const Lontong = () => {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <ImageBackground source={{ uri: lontongbalap }} style={{ height: 300 }}>
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
            <View
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
            </View>
          </ImageBackground>
        </View>
  
        <View
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
                  Resep Lontong Racing
                </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Bahan-bahan:
            </Text>
            <Text>1.1/2 kg kecambah panjang</Text>
            <Text>2.4 buah lontong (menyesuaikan)</Text>
            <Text>3.2 buah tahu putih potong dadu (goreng setengah mateng)</Text>
            <Text>4.daun bawang goreng 3 bawang merah 2 bawang putih</Text>
            <Text>5.10 buah cabai rawit direbus (menyesuaikan)</Text>
            <Text>6.3 sdm gula pasir</Text>
            <Text>7.1 sdm petis</Text>
            
            
            {/* Add more ingredients as needed */}
          </View>
  
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Cara Pembuatan:
            </Text>
            <Text>1. Tumis bumbu halus: bawang merah, bawang putih hingga harum, tiriskan</Text>
            <Text>2. Rebus cambah panjang beserta cabai yang akan digunakan sebagai sambal.</Text>
            <Text>3. Ambil cabai yang agak lembek, masukkan bumbu tumisan dan tahu yang telah digoreng kemudian merica, garam, kecap. tes rasa</Text>
            <Text>4. Masukkan daun bawang dan bawang goreng ketika hendak matang.</Text>
            <Text>5. Cara membuat Sambal: lembutkan cabai yang telah direbus, beri kecap dan petis, aduk-aduk hingga rata, tambahkan air jeruk nipis. beri bawang goreng agar sedap</Text>
            <Text>6. Potong lontong dan tata di piring, siramkan kuah lontong balap, sajikan dengan sambal.</Text>
            {/* Add more steps as needed */}
          </View>
        </View>
      </View>
    );
  };
  
  export default Lontong;
  
  const styles = StyleSheet.create({});
  