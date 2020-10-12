import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Character } from '../models/character';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  public characters: any;
  public pageSize: number = 20;
  public p: number = 1;
  public total: number = 100;
  public loading: boolean = true;
  public searchTerm: string = '';

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

  search(): void {
    let term = this.searchTerm;
    const a = this.characters.filter((tag) => tag.name.indexOf(term) >= 0);
    debugger;
  }

}
