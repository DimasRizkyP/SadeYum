import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message, Book} from 'iconsax-react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../theme';
import {formatDate} from '../utils/formatDate';

const KontenProfil = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item?.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}>
          <View style={{gap: 5, flex: 1}}>
            <Text style={styles.cardCategory}>{item.category?.name}</Text>
            <Text style={styles.cardTitle}>{item?.title}</Text>
          </View>
          <Book color={colors.black(1)} variant="Linear" size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default KontenProfil;

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    paddingVertical: 10,
  },
});
