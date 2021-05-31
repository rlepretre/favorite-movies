import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

import { MovieService } from '../movies/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  save(): void {
    this.movieService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
