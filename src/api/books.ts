import {BASE_URL} from './constants';
import {BooksResponse} from './types';

export async function getBooks(
  page: number,
): Promise<BooksResponse | undefined> {
  try {
    const books = await fetch(`${BASE_URL}/books/${page}`);
    return await books.json();
  } catch (error) {
    console.log(error);
  }
}
