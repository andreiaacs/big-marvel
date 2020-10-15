import { Component, OnInit, PipeTransform } from '@angular/core';
import { first } from 'rxjs/operators';
import { Character } from '../models/character';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit  {

  public characters: any;
  public pageSize: number = 20;
  public p: number = 1;
  public total: number = 100;
  public loading: boolean = true;
  public characterSearch: string = '';

  constructor(
    private readonly charactersService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .pipe(first())
      .subscribe(
        (res: Character) => {
          console.log('Deu bom: ', res);
          this.characters = res.data.results;
          this.loading = false;
        });
  }

  filtrar(filtro): void {
    debugger;
   // this.characters.filter(item => item.name.indexOf(filtro) !== -1);
  }

}
