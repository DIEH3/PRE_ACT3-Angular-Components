import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;

    // The inputs are required, so give them values before rendering.
    fixture.componentRef.setInput('fullName', 'Test Name');
    fixture.componentRef.setInput('location', 'Test City');
    fixture.componentRef.setInput('email', 'test@example.com');
    fixture.componentRef.setInput('phone', '0000 000 0000');
    fixture.componentRef.setInput('profile', 'Test profile');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the full name', () => {
    const h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(h1?.textContent).toContain('Test Name');
  });
});
