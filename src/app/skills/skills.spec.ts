import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;

    // The skills input is required, so give it a value before rendering.
    fixture.componentRef.setInput('skills', ['Angular', 'CSS']);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show one button per skill', () => {
    const buttons = (fixture.nativeElement as HTMLElement).querySelectorAll('.skill');
    expect(buttons.length).toBe(2);
  });

  it('should emit the skill that was clicked', () => {
    let emitted = '';
    component.skillSelected.subscribe(skill => (emitted = skill));
    component.selectSkill('Angular');
    expect(emitted).toBe('Angular');
  });
});
