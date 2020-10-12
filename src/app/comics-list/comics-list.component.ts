import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Comic } from '../models/comic';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  public comics: any;
  public pageSize: number = 20;
  public p: number = 1;
  public total: number = 100;
  public loading: boolean = true;

  constructor(
    private readonly comicsService: ComicsService,
  ) { }

  ngOnInit(): void {
    this.comicsService
      .getAllComics()
      .pipe(first())
      .subscribe(
        (res: Comic) => {
          console.log('Deu bom: ', res);
          this.comics = res.data.results;
          this.loading = false;
        });
  }

  getComic(c: Comic): void {
    debugger;
    // this.comicsService
    //   .getComicById()
    //   .pipe(first())
    //   .subscribe(
    //     (res: Comic) => {
    //       console.log('Deu bom: ', res);
    //       this.comics = res.data.results;
    //       this.loading = false;
    //     });
  }

}
