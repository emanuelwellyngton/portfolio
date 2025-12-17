import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface TechCategory {
  name: string;
  technologies: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  techStack = signal<TechCategory[]>([
    {
      name: 'Backend',
      technologies: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB'],
    },
    {
      name: 'Frontend',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Signals'],
    },
    {
      name: 'DevOps & Ferramentas',
      technologies: ['Docker', 'Git', 'Jenkins', 'AWS', 'Jira'],
    },
  ]);
}
