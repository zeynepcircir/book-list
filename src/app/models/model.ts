export class Book {
  id: number;
  name: string;
  author: string;
  year: string;
  star: number;
  imageUrl: string;
  category: string;
  description: string;

  constructor(
    id: number,
    name: string,
    author: string,
    year: number,
    star: number,
    imageUrl: string,
    category: string,
    description: string
  ) {}
}
