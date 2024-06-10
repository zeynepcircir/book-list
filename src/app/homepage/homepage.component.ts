import { Component } from '@angular/core';
import { Book } from '../models/model';
import { Categories } from '../models/categories.const';
import { StarComponent } from '../star/star.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [StarComponent, FooterComponent]
})
export class HomepageComponent {
  bookData: Book[] = [
    {
      id: 1,
      name: 'Dune',
      author: 'Frank Herbert',
      year: '1965',
      star: 4.2,
      imageUrl: 'https://example.com/dune.jpg',
      category: Categories.Drama,
      description: 'A complex tale set in the distant future.',
    },
    {
      id: 2,
      name: '1984',
      author: 'George Orwell',
      year: '1949',
      star: 4.16,
      imageUrl: 'https://example.com/1984.jpg',
      category: Categories.Adventure,
      description: 'A dystopian novel set in a totalitarian state.',
    },
    {
      id: 3,
      name: 'Foundation',
      author: 'Isaac Asimov',
      year: '1951',
      star: 4.2,
      imageUrl: 'https://example.com/foundation.jpg',
      category: Categories.Drama,
      description: 'The beginning of a vast galactic empire.',
    },
    {
      id: 4,
      name: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      year: '1979',
      star: 4.21,
      imageUrl: 'https://example.com/hitchhikers.jpg',
      category: Categories.Science,
      description: 'An eccentric adventure across space.',
    },
    {
      id: 5,
      name: 'Neuromancer',
      author: 'William Gibson',
      year: '1984',
      star: 3.89,
      imageUrl: 'https://example.com/neuromancer.jpg',
      category: Categories.Drama,
      description: 'A pioneering cyberpunk novel.',
    },
    {
      id: 6,
      name: "Ender's Game",
      author: 'Orson Scott Card',
      year: '1985',
      star: 4.3,
      imageUrl: 'https://example.com/endersgame.jpg',
      category: Categories.Drama,
      description: 'A military science fiction novel.',
    },
    {
      id: 7,
      name: 'Brave New World',
      author: 'Aldous Huxley',
      year: '1932',
      star: 3.99,
      imageUrl: 'https://example.com/bravenewworld.jpg',
      category: Categories.Adventure,
      description: 'A dystopian novel exploring a future society.',
    },
    {
      id: 8,
      name: 'The War of the Worlds',
      author: 'H.G. Wells',
      year: '1898',
      star: 3.81,
      imageUrl: 'https://example.com/waroftheworlds.jpg',
      category: Categories.Science,
      description:
        'An early science fiction novel depicting an alien invasion.',
    },
    {
      id: 9,
      name: 'Snow Crash',
      author: 'Neal Stephenson',
      year: '1992',
      star: 4.03,
      imageUrl: 'https://example.com/snowcrash.jpg',
      category: Categories.Science,
      description: 'A post-cyberpunk novel set in a near-future Los Angeles.',
    },
    {
      id: 10,
      name: 'The Left Hand of Darkness',
      author: 'Ursula K. Le Guin',
      year: '1969',
      star: 4.07,
      imageUrl: 'https://example.com/lefthandofdarkness.jpg',
      category: Categories.Science,
      description:
        'A science fiction novel exploring themes of gender and sexuality.',
    },
    {
      id: 11,
      name: 'Hyperion',
      author: 'Dan Simmons',
      year: '1989',
      star: 4.22,
      imageUrl: 'https://example.com/hyperion.jpg',
      category: Categories.Adventure,
      description: 'A space opera set in the far future.',
    },
    {
      id: 12,
      name: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      year: '1953',
      star: 3.99,
      imageUrl: 'https://example.com/fahrenheit451.jpg',
      category: Categories.Adventure,
      description: 'A dystopian novel set in a future where books are banned.',
    },
    {
      id: 13,
      name: 'I, Robot',
      author: 'Isaac Asimov',
      year: '1950',
      star: 4.19,
      imageUrl: 'https://example.com/irobot.jpg',
      category: Categories.Adventure,
      description:
        'A collection of interconnected short stories exploring robotics.',
    },
    {
      id: 14,
      name: 'The Martian',
      author: 'Andy Weir',
      year: '2011',
      star: 4.4,
      imageUrl: 'https://example.com/martian.jpg',
      category: Categories.Adventure,
      description: 'A survival story set on Mars.',
    },
    {
      id: 15,
      name: 'Starship Troopers',
      author: 'Robert A. Heinlein',
      year: '1959',
      star: 4.0,
      imageUrl: 'https://example.com/starshiptroopers.jpg',
      category: Categories.Adventure,
      description: 'A military science fiction novel.',
    },
    {
      id: 16,
      name: 'The Time Machine',
      author: 'H.G. Wells',
      year: '1895',
      star: 3.88,
      imageUrl: 'https://example.com/timemachine.jpg',
      category: Categories.Adventure,
      description: 'A science fiction novella exploring time travel.',
    },
    {
      id: 17,
      name: 'Do Androids Dream of Electric Sheep?',
      author: 'Philip K. Dick',
      year: '1968',
      star: 4.08,
      imageUrl: 'https://example.com/doandroids.jpg',
      category: Categories.Drama,
      description: 'The basis for the film Blade Runner.',
    },
    {
      id: 18,
      name: 'Do Androids Dream of Electric Sheep?',
      author: 'Philip K. Dick',
      year: '1968',
      star: 4.08,
      imageUrl: 'https://example.com/doandroids.jpg',
      category: Categories.Adventure,
      description: 'The basis for the film Blade Runner.',
    },
    {
      id: 19,
      name: 'Do Androids Dream of Electric Sheep?',
      author: 'Philip K. Dick',
      year: '1968',
      star: 4.08,
      imageUrl: 'https://example.com/doandroids.jpg',
      category: Categories.Drama,
      description: 'The basis for the film Blade Runner.',
    },
    {
      id: 20,
      name: 'Do Androids Dream of Electric Sheep?',
      author: 'Philip K. Dick',
      year: '1968',
      star: 4.08,
      imageUrl: 'https://example.com/doandroids.jpg',
      category: Categories.Adventure,
      description: 'The basis for the film Blade Runner.',
    },
  ];

  footerText: string = "Zeynep Çırçır"
 company: string = "SmartICT"
  filteredData: Book[] = [];
  categoriesButton: string[] = [];
  basketList: Book[] = [];

  ngOnInit() {
    this.categoriesButton = Object.keys(Categories); //objeyi arraye çevir
  }

  filterCategory(category: string) {
    this.filteredData = this.bookData.filter(
      (data) => data.category === category
    );
  }

  addBasket(book: Book) {
    const index = this.basketList.findIndex((data) => data.name === book.name);
    if (index < 0) this.basketList.push(book);
  }

  
}
