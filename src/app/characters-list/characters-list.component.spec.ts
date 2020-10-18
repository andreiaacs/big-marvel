import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character';
import { CharactersService } from '../services/characters.service';

import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  const charactersServiceSpy = {
    getCharacters: () => (of({})),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersListComponent],
      providers: [
        { provide: CharactersService, useValue: charactersServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('ngOnInit', () => {
    const charactersServiceStub: CharactersService = TestBed.get(
      CharactersService
    );
    const character = new Character();
    character.data.results[0].name = 'Capita Marvel';
    character.data.results[0].name = 'Capitao America';
    character.data.results[0].name = 'Hulk';
    character.data.results[0].name = 'Capitao Formiga';
  
    spyOn(charactersServiceStub, 'getCharacters').and.returnValue(of(character));

    component.ngOnInit();
  });

});
