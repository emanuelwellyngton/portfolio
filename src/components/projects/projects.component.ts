import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  tags: string[];
  challenge: string;
  solution: string;
  architecture: string;
  techStack: string[];
  links: {
    github: string;
    live?: string;
    blog?: string;
  };
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Plataforma de E-commerce',
      shortDescription: 'Uma solução completa de e-commerce com foco em performance e UX.',
      thumbnailUrl: 'https://picsum.photos/seed/ecomm/600/400',
      heroImageUrl: 'https://picsum.photos/seed/ecomm/1200/600',
      tags: ['Spring Boot', 'Angular', 'PostgreSQL'],
      challenge: 'Criar uma plataforma de vendas online rápida, segura e escalável, capaz de lidar com um grande volume de transações e produtos.',
      solution: 'Desenvolvi um backend robusto com Spring Boot, utilizando microservices para gerenciar produtos, pedidos e usuários. O frontend foi construído em Angular para uma experiência de usuário reativa e dinâmica.',
      architecture: 'Arquitetura de microservices com comunicação via REST APIs, banco de dados relacional para dados transacionais e um cache com Redis para otimizar a performance.',
      techStack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Stripe API'],
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      id: 2,
      title: 'Sistema de Gerenciamento de Tarefas',
      shortDescription: 'Uma aplicação colaborativa para gestão de projetos e tarefas em equipe.',
      thumbnailUrl: 'https://picsum.photos/seed/tasks/600/400',
      heroImageUrl: 'https://picsum.photos/seed/tasks/1200/600',
      tags: ['Node.js', 'React', 'MongoDB'],
      challenge: 'Desenvolver uma ferramenta intuitiva que permita a equipes organizarem suas tarefas, definirem prazos e acompanharem o progresso de projetos em tempo real.',
      solution: 'Utilizei Node.js com Express para a API e WebSockets para comunicação em tempo real. O frontend em React com Redux garante uma UI consistente e reativa às mudanças de estado.',
      architecture: 'API RESTful monolítica com conexão a um banco de dados NoSQL (MongoDB) para flexibilidade. WebSockets para notificações e atualizações instantâneas.',
      techStack: ['Node.js', 'Express', 'React', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      links: {
        github: '#',
        live: '#',
        blog: '#',
      },
    },
    {
      id: 3,
      title: 'API de Análise de Dados',
      shortDescription: 'Um serviço de backend para processar e analisar grandes volumes de dados.',
      thumbnailUrl: 'https://picsum.photos/seed/data/600/400',
      heroImageUrl: 'https://picsum.photos/seed/data/1200/600',
      tags: ['Python', 'FastAPI', 'Pandas'],
      challenge: 'Construir uma API de alta performance capaz de ingerir, processar e servir dados analíticos de forma eficiente, com endpoints para consultas complexas.',
      solution: 'Empreguei Python com FastAPI pela sua velocidade e facilidade de uso. A biblioteca Pandas foi usada para a manipulação e análise dos dados, e a API foi containerizada com Docker para fácil deploy.',
      architecture: 'API assíncrona baseada em FastAPI. Os dados são processados em background jobs para não bloquear as requisições, e os resultados são armazenados para consultas rápidas.',
      techStack: ['Python', 'FastAPI', 'Pandas', 'Docker', 'Celery'],
      links: {
        github: '#',
      },
    }
  ]);

  selectedProject = signal<Project | null>(null);

  selectProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeModal(): void {
    this.selectedProject.set(null);
  }
}
