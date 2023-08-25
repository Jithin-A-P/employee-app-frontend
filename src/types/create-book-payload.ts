interface Shelf {
  shelfCode: string;
  bookCount: number;
}

type Book = {
  isbn?: string;
  title: string;
  author: string;
  category: string;
  description: string;
  publisher: string;
  releaseDate: string;
  thumbnailUrl: string;
  shelves: Shelf[];
};

export default Book;
