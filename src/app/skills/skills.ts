import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  // Input: the list of skills comes from the parent.
  skills = input.required<string[]>();

  // Output: an event this component sends up to the parent.
  skillSelected = output<string>();

  // Remembers which skill was clicked last, so it can be highlighted.
  selected = signal('');

  selectSkill(skill: string) {
    this.selected.set(skill);
    this.skillSelected.emit(skill);
  }
}
