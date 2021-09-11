import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should reflect the input given', () => {
    component.ariaLabel = 'Some aria label';
    component.label = '350 followers!';
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('span'));
    expect(element.nativeElement.textContent).toBe('350 followers!');
    expect(element.attributes['aria-label']).toBe('Some aria label');
  });
});
