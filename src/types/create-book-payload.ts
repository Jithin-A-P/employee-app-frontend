interface Shelf {
  shelfCode: string;
  bookCount: number;
}

type Book = {
  ISBN?: string;
  title: string;
  author: string;
  category: string;
  shelves: Shelf[];
};

export default Book;
