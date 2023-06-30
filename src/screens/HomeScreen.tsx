import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {BookItem} from '../components';
import {getBooks} from '../api/books';
import {Book} from '../api/types';

export const HomeScreen: React.FC = () => {
  const [books, setBooks] = useState<Array<Book>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBooks(1)
      .then(result => {
        if (result) {
          setBooks(result.books);
          setTotal(result.total);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getMoreBooks = async () => {
    if (books.length < total) {
      try {
        const result = await getBooks(currentPage + 1);
        if (result) {
          setBooks(prev => [...prev, ...result?.books]);
          setCurrentPage(prev => prev + 1);
        }
      } catch (error) {}
    }
    return;
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const result = await getBooks(1);
      if (result) {
        setBooks(result.books);
        setTotal(result.total);
        setIsRefreshing(false);
        setCurrentPage(1);
      }
    } catch (error) {
      setIsRefreshing(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={30} color={'#1D232B'} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({item}) => <BookItem key={item.id} data={item} />}
        numColumns={2}
        // eslint-disable-next-line react-native/no-inline-styles
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => <View />}
        onEndReached={getMoreBooks}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          books.length < total ? (
            <ActivityIndicator size={25} color={'#1D232B'} />
          ) : (
            <Text style={styles.noBookText}>No more books!</Text>
          )
        }
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  } as ViewStyle,
  noBookText: {
    color: '#1D232B',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'NotoSan',
    marginLeft: 16,
    marginBottom: 10,
    textAlign: 'center',
  } as TextStyle,
});
