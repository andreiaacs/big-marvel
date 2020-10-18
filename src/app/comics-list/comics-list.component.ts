import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Comic } from '../models/comic';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit, OnDestroy {

  public comics: any;
  public pageSize: number = 9;
  public p: number = 1;
  public total: number = 20;
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

  ngOnDestroy(): void {
  }  

}
