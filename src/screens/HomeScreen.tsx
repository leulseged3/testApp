import React from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import {BookItem} from '../components';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[...Array(50).keys()]}
        renderItem={({index}) => <BookItem key={index} />}
        numColumns={2}
        ItemSeparatorComponent={() => <View />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  } as ViewStyle,
});
