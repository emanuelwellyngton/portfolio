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
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL'],
    },
    {
      name: 'Frontend',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'DevOps & Ferramentas',
      technologies: ['Docker', 'Git', 'GitHub Actions', 'AWS'],
    },
  ]);
}
