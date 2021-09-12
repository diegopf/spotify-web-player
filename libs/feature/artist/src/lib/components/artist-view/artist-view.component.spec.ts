import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpotifyApiService } from '@spotify-web-player/api';
import {
  ChipModule,
  ImageModule,
  ListModule,
  ViewModule,
} from '@spotify-web-player/shared';
import { ArtistViewComponent } from './artist-view.component';

describe('ArtistViewComponent', () => {
  let component: ArtistViewComponent;
  let fixture: ComponentFixture<ArtistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ListModule,
        ImageModule,
        ChipModule,
        ViewModule,
      ],
      declarations: [ArtistViewComponent],
      providers: [
        {
          provide: SpotifyApiService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
