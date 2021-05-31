import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const movies: Movie[] = [
      { id: 11, name: 'Avatar', url: 'https://www.youtube.com/embed/6ziBFh3V1aM' },
      { id: 12, name: 'Divergent', url: 'https://www.youtube.com/embed/sutgWjz10sM' },
      { id: 13, name: 'Inception', url: 'https://www.youtube.com/embed/YoHD9XEInc0' },
      { id: 14, name: 'Star Wars', url: 'https://www.youtube.com/embed/FDXmcZ1_D-o' },
      { id: 15, name: 'Ready Player One', url: 'https://www.youtube.com/embed/cSp1dM2Vj48' },
      { id: 16, name: 'Matrix', url: 'https://www.youtube.com/embed/vKQi3bBA1y8' },
      { id: 17, name: 'The Revenant', url: 'https://www.youtube.com/embed/LoebZZ8K5N0' },
      { id: 18, name: 'American Hustle', url: 'https://www.youtube.com/embed/ST7a1aK_lG0' },
      { id: 19, name: 'The Hunger Games', url: 'https://www.youtube.com/embed/mfmrPu43DF8' },
      { id: 20, name: 'The Accountant', url: 'https://www.youtube.com/embed/DBfsgcswlYQ' }
    ];
    return { movies };
  }
  // Overrides the genId method to ensure that a movie always has an id.
  // If the movie array is empty,
  // the method below returns the initial number (11).
  // if the movie array is not empty, the method below returns thehighest
  // movie id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie =>
      movie.id)) + 1 : 11;
  }
}