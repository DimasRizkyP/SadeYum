import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../../theme';
import {Setting2, Edit, AddSquare} from 'iconsax-react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {formatNumber} from '../../utils/formatNumber';
import style from './profile.style';
import {ItemSmall} from '../../components';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';

const sotoayam =
  'https://i.pinimg.com/564x/1d/e4/a1/1de4a19e2d70724d71ad912cec05885d.jpg';
const mieayam =
  'https://i.pinimg.com/564x/02/73/7c/02737ced46ba22ab6e21f86aefdbcc28.jpg';

const Profile = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const user = auth().currentUser;
    const fetchBlogData = () => {
      try {
        if (user) {
          const userId = user.uid;
          const blogCollection = firestore().collection('blog');
          const query = blogCollection.where('authorId', '==', userId);
          const unsubscribeBlog = query.onSnapshot(querySnapshot => {
            const blogs = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }));
            setBlogData(blogs);
            setLoading(false);
          });

          return () => {
            unsubscribeBlog();
          };
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    const fetchProfileData = () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userRef = firestore().collection('users').doc(userId);

          const unsubscribeProfile = userRef.onSnapshot(doc => {
            if (doc.exists) {
              const userData = doc.data();
              setProfileData(userData);
              fetchBlogData();
            } else {
              console.error('Dokumen pengguna tidak ditemukan.');
            }
          });

          return () => {
            unsubscribeProfile();
          };
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchBlogData();
    fetchProfileData();
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
  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={style.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openActionSheet}>
          <Setting2 color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>
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
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Rendang
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
            source={{uri: sotoayam}}
            style={{width: 144, height: 105, borderRadius: 20}}
          />
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Rendang
            </Text>
            <Text style={{fontSize: 10, marginTop: 2, color: 'black'}}>
              Lihat lebih Lanjut
            </Text>

            {/* Konten lainnya */}
          </View>
        </TouchableOpacity>
        <ActionSheet
          ref={actionSheetRef}
          containerStyle={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
          indicatorStyle={{
            width: 100,
          }}
          gestureEnabled={true}
          defaultOverlayOpacity={0.3}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
            }}
            onPress={handleLogout}>
            <Text
              style={{
                fontFamily: fontType['Pjs-Medium'],
                color: colors.black(),
                fontSize: 18,
              }}>
              Log out
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
            }}
            onPress={closeActionSheet}>
            <Text
              style={{
                fontFamily: fontType['Pjs-Medium'],
                color: 'red',
                fontSize: 18,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </ActionSheet>
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
