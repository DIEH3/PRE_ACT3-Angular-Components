import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

// Shape of one project card.
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The parent (App) owns all CV data and passes it down to the children.
  fullName = 'Dohn Diehllon Djan D. Montoya';
  location = 'Bamban, Tarlac';
  email = 'dddmontoya1906@gmail.com';
  phone = '0919 595 5099';

  profile =
    'I am a student at Holy Angel University taking a bachelor\'s degree in Information Technology, ' +
    'specializing in Web Development. I enjoy turning ideas into websites that people can actually use, such as ' +
    'finder apps for quiet places and restaurants around Angeles City and a website about technology and news. ' +
    'My goal is to become a front-end developer who builds clean, responsive and accessible web applications ' +
    'with HTML, CSS, TypeScript and Angular. I learn something new with every project, and I want to keep ' +
    'improving until I can contribute to a real development team.';

  skills = [
    'HTML5',
    'CSS3',
    'Responsive design',
    'JavaScript (ES6+)',
    'TypeScript',
    'Angular',
    'Git and GitHub',
    'Angular CLI',
    'Browser DevTools',
    'Accessibility basics'
  ];

  proficiencies: Proficiency[] = [
    { category: 'Languages', tool: 'HTML and CSS', level: 'Intermediate' },
    { category: 'Languages', tool: 'JavaScript', level: 'Intermediate' },
    { category: 'Languages', tool: 'TypeScript', level: 'Beginner' },
    { category: 'Frameworks', tool: 'Angular', level: 'Beginner' },
    { category: 'Tools', tool: 'Visual Studio Code', level: 'Advanced' },
    { category: 'Tools', tool: 'Git and GitHub', level: 'Intermediate' },
    { category: 'Tools', tool: 'Node.js and npm', level: 'Intermediate' },
    { category: 'Tools', tool: 'Angular CLI', level: 'Beginner' },
    { category: 'Practices', tool: 'Responsive design', level: 'Intermediate' },
    { category: 'Practices', tool: 'Accessibility', level: 'Beginner' }
  ];

  projects: Project[] = [
    {
      title: 'Nook Finder',
      description: 'A finder for quiet places around Angeles City.',
      tags: ['Angeles City', 'Places finder'],
      link: 'https://github.com/REID31-SaN/Nook-Finder'
    },
    {
      title: 'SoyHaven',
      description: 'A restaurant finder for food spots around Angeles City.',
      tags: ['Angeles City', 'Food and restaurants'],
      link: 'https://github.com/Fourstik/6WCSERVER-WD-303-SoyHaven'
    },
    {
      title: 'IMJ Core',
      description: 'A computer website that gives information about technology and news.',
      tags: ['Technology', 'News'],
      link: 'https://github.com/Fourstik/imj-core'
    }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
