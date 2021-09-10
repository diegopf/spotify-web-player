import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit the text to search', fakeAsync(() => {
    const searchText = 'Band of ';
    const outputSpy = jest.spyOn(component.searchFor, 'emit');
    component.searchText.setValue(searchText);
    tick(300);
    expect(outputSpy).toHaveBeenCalledWith(searchText);
    const element = fixture.debugElement.query(By.css('#search-input'));
    expect(element.nativeElement.value).toBe(searchText);
  }));
});
