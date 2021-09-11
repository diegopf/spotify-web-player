import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpotifyApiService } from '@spotify-web-player/api';
import { ImageModule, InputModule } from '@spotify-web-player/shared';
import { SearchLayoutComponent } from '../search-layout/search-layout.component';
import { SearchViewComponent } from './search-view.component';

describe('SearchViewComponent', () => {
  let component: SearchViewComponent;
  let fixture: ComponentFixture<SearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchViewComponent, SearchLayoutComponent],
      imports: [RouterTestingModule, ImageModule, InputModule],
      providers: [
        {
          provide: SpotifyApiService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
