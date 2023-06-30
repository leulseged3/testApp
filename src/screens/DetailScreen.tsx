import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const DetailScreen: React.FC = () => {
  const {params} = useRoute<any>();
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      navigation.setOptions({title: params.data.title});
    }
  }, [isFocused, navigation, params.data.title]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: params.data.coverImage}}
        defaultSource={require('../assets/images/image-placeholder.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{params.data.title}</Text>

        <Text style={styles.detail}>{params.data.description}</Text>

        <View style={styles.priceWrapper}>
          <Text style={styles.discount}>{params.data.discount}%</Text>
          <Text style={styles.price}>{params.data.price} 원</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../assets/images/image-1.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>안녕 나 응애 </Text>
          <Icon name="checkmark-circle" size={18} color={'#01B99F'} />
          <Text style={styles.cardMutedText}>1일전</Text>
          <Icon name="ellipsis-horizontal" color={'#AFB9CA'} size={18} />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyText}>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭우짤래미님도
            아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
            기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
            올라온다고 하니 꼭 봐주세용~!
          </Text>

          <View style={styles.cardAction}>
            <View style={styles.cardActionButton}>
              <Icon name="heart-outline" size={16} color={'#AFB9CA'} />
              <Text style={styles.cardActionText}>5</Text>
            </View>

            <View style={styles.cardActionButton}>
              <Icon
                name="chatbubble-ellipses-outline"
                size={16}
                color={'#AFB9CA'}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{marginLeft: 10}}
              />
              <Text style={styles.cardActionText}>5</Text>
            </View>
          </View>

          <View style={styles.cardHeader}>
            <Image
              source={require('../assets/images/image-2.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>ㅇㅅㅇ</Text>
            <Text style={styles.cardMutedText}>1일전</Text>
            <Icon name="ellipsis-horizontal" color={'#AFB9CA'} size={18} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardBodyText}>
              오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
            </Text>

            <View style={styles.cardAction}>
              <View style={styles.cardActionButton}>
                <Icon name="heart-outline" size={16} color={'#AFB9CA'} />
                <Text style={styles.cardActionText}>5</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.commentBox}>
        <Image
          source={require('../assets/images/image-3.png')}
          style={styles.commentImage}
        />
        <Text style={styles.commentText}>댓글을 남겨주세요.</Text>
        <Text style={styles.commentButton}>등록</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  } as ViewStyle,
  image: {
    width: '100%',
    height: 450,
  } as ImageStyle,
  content: {
    marginHorizontal: 16,
    marginTop: 10,
  } as ViewStyle,
  title: {
    fontFamily: 'NotoSans',
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
  } as TextStyle,
  detail: {
    fontFamily: 'NotoSans',
    fontWeight: '400',
    fontSize: 12,
    color: '#000000',
  } as TextStyle,
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  divider: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#F7F8FA',
    marginVertical: 10,
  } as ViewStyle,
  card: {
    paddingHorizontal: 16,
  } as ViewStyle,
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  cardImage: {
    width: 34,
    height: 34,
  } as ImageStyle,
  cardTitle: {
    color: '#1D232B',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'NotoSan',
    marginLeft: 10,
  } as TextStyle,
  cardMutedText: {
    color: '#919EB6',
    fontWeight: '500',
    fontSize: 10,
    fontFamily: 'NotoSan',
    marginLeft: 5,
    flex: 1,
  } as TextStyle,
  cardBody: {
    marginLeft: 44,
  } as ViewStyle,
  cardBodyText: {
    color: '#313B49',
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'NotoSan',
    marginTop: 5,
  } as TextStyle,
  cardAction: {
    flexDirection: 'row',
    marginBottom: 10,
  } as ViewStyle,
  cardActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  } as ViewStyle,
  cardActionText: {
    color: '#919EB6',
    fontWeight: '400',
    fontSize: 10,
    marginLeft: 2,
    fontFamily: 'NotoSan',
  } as TextStyle,
  commentBox: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 10,
  } as ViewStyle,
  commentImage: {
    width: 24,
    height: 24,
  } as ImageStyle,
  commentText: {
    color: '#AFB9CA',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 15,
    flex: 1,
    fontFamily: 'NotoSan',
  } as TextStyle,
  commentButton: {
    color: '#AFB9CA',
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'NotoSan',
  } as TextStyle,
});
