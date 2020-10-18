import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ComicsService } from '../services/comics.service';

import { ComicsListComponent } from './comics-list.component';

describe('ComicsListComponent', () => {
  let component: ComicsListComponent;
  let fixture: ComponentFixture<ComicsListComponent>;
  
  const comicsServiceSpy = {
    getAllComics:()=>(of({})),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsListComponent ],
      providers: [
        { provide: ComicsService, useValue: comicsServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  xit('ngOnInit', () => {
    const comicsServiceStub: ComicsService = TestBed.get(
      ComicsService
    );
    spyOn(comicsServiceStub, 'getAllComics').and.callThrough();

    component.ngOnInit();

    expect(comicsServiceStub.getAllComics).toHaveBeenCalled();
  });
});
