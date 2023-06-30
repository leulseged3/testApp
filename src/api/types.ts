export type Book = {
  id: number;
  title: string;
  description: string;
  discount: number;
  coverImage: string;
  price: number;
};

export type BooksResponse = {
  books: Array<Book>;
  currentPage: number;
  total: number;
};
