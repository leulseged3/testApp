import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ScreenNames} from '../enums';
import {Book} from '../api/types';

type BookItemProps = {data: Book};

export const BookItem: React.FC<BookItemProps> = props => {
  const {data} = props;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(ScreenNames.DetailScreen, {data});
      }}>
      <Image
        source={{uri: data.coverImage}}
        defaultSource={require('../assets/images/image-placeholder.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{data.title}</Text>

      <View style={styles.priceWrapper}>
        <Text style={styles.discount}>{data.discount}%</Text>
        <Text style={styles.price}>{data.price} 원</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '49%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  } as ViewStyle,
  image: {
    width: '100%',
    height: 187,
  } as ImageStyle,
  title: {
    color: '#1D232B',
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'NotoSan',
    marginLeft: 16,
    marginTop: 10,
  } as TextStyle,
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
  } as ViewStyle,
  discount: {
    color: '#FF003E',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'NotoSan',
  } as TextStyle,
  price: {
    color: '#080A0C',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'NotoSan',
  } as TextStyle,
});
