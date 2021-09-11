import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ThumbnailComponent } from './thumbnail.component';

describe('ThumbnailComponent', () => {
  let component: ThumbnailComponent;
  let fixture: ComponentFixture<ThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThumbnailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should reflect the input given', () => {
    component.ariaLabel = 'Some aria label';
    component.image = 'img';
    component.width = 300;
    component.height = 100;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('img'));
    expect(element.styles['width']).toBe('300px');
    expect(element.styles['height']).toBe('100px');
    expect(element.attributes['src']).toBe('img');
  });
});
