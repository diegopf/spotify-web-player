import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpotifyApiService } from '@spotify-web-player/api';
import { CardModule, ImageModule } from '@spotify-web-player/shared';
import { AlbumViewComponent } from './album-view.component';

describe('AlbumViewComponent', () => {
  let component: AlbumViewComponent;
  let fixture: ComponentFixture<AlbumViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CardModule, ImageModule],
      declarations: [AlbumViewComponent],
      providers: [
        {
          provide: SpotifyApiService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
