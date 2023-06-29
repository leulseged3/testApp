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

type BookItemProps = {};

export const BookItem: React.FC<BookItemProps> = props => {
  const {} = props;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(ScreenNames.DetailScreen);
      }}>
      <Image
        source={require('../assets/images/image-placeholder.png')}
        style={styles.image}
      />
      <Text style={styles.title}>레이블라우스</Text>

      <View style={styles.priceWrapper}>
        <Text style={styles.discount}>10%</Text>
        <Text style={styles.price}>57,600 원</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#FFFFFF',
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
  } as TextStyle,
  price: {
    color: '#080A0C',
    fontWeight: '700',
    fontSize: 16,
  } as TextStyle,
});
