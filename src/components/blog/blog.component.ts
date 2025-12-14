import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tag: string;
  url: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  posts = signal<BlogPost[]>([
    {
      title: 'Dominando Microservices com Spring Boot e Docker',
      date: '15 de Julho, 2024',
      readTime: '8 min de leitura',
      summary: 'Um guia aprofundado sobre como construir, containerizar e orquestrar uma arquitetura de microservices utilizando o ecossistema Spring.',
      tag: 'Backend',
      url: '#',
    },
    {
      title: 'State Management em Angular com Signals',
      date: '02 de Junho, 2024',
      readTime: '5 min de leitura',
      summary: 'Explore a nova abordagem reativa do Angular para gerenciamento de estado, tornando suas aplicações mais simples e performáticas.',
      tag: 'Frontend',
      url: '#',
    },
    {
      title: 'Boas Práticas de CI/CD para Desenvolvedores',
      date: '20 de Maio, 2024',
      readTime: '10 min de leitura',
      summary: 'Aprenda a configurar pipelines de integração e entrega contínua que automatizam testes e deploys, acelerando o ciclo de desenvolvimento.',
      tag: 'DevOps',
      url: '#',
    },
  ]);
}
