import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;

    // The inputs are required, so give them values before rendering.
    fixture.componentRef.setInput('fullName', 'Test Name');
    fixture.componentRef.setInput('proficiencies', [
      { category: 'Tools', tool: 'Git', level: 'Beginner' },
    ]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show one table row per proficiency', () => {
    const rows = (fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr');
    expect(rows.length).toBe(1);
  });
});
