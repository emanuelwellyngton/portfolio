import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ArticleSection {
  title: string;
  body: string;
  bullets?: string[];
}

interface ResourceLink {
  label: string;
  href: string;
}

interface QuoteBlock {
  text: string;
  author: string;
  role: string;
}

interface BlogPostDetail {
  title: string;
  tag: string;
  date: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  sections: ArticleSection[];
  quote: QuoteBlock;
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent {
  readonly post: BlogPostDetail = {
    title: 'State Management em Angular com Signals',
    tag: 'Frontend',
    date: '02 de Junho, 2024',
    readTime: '5 min de leitura',
    heroImage: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80',
    excerpt: 'Um guia prático mostrando como usar Angular Signals para modelar estado local sem depender de bibliotecas externas, reduzindo complexidade e melhorando previsibilidade.',
    sections: [
      {
        title: 'Por que Signals agora?',
        body: 'Signals trazem reatividade previsível e sem zonas, tornando o fluxo de dados explícito e eliminando dependência de mutation listeners espalhados. Eles funcionam bem sozinhos ou ao lado de stores globais, mas brilham no estado local e em UIs críticas de performance.',
        bullets: [
          'Reatividade síncrona e determinística (sem microtasks escondidas).',
          'Menos boilerplate comparado a Subjects ou BehaviorSubjects.',
          'Fácil de debugar: você sabe quem lê e quem escreve.',
        ],
      },
      {
        title: 'Modelando estado local',
        body: 'Comece pequeno: um signal para o estado base, computed para derivar informações e effect para sincronizar efeitos colaterais como analytics ou chamadas de serviço. Mantenha os writes centralizados em métodos explícitos para preservar a rastreabilidade.',
        bullets: [
          'Use computed para campos derivados e evite duplicação de estado.',
          'Encapsule updates em métodos como toggleFavorite() ou loadPost().',
          'Prefira ler signals no template usando a função chamada (post()) ou via getters.',
        ],
      },
      {
        title: 'Fluxo de dados previsível',
        body: 'Signals reduzem a necessidade de lifecycle hooks para atualizar a UI. Ao invés de “esperar” change detection, o template re-renderiza imediatamente quando um signal é atualizado, mantendo a interface responsiva mesmo com OnPush.',
        bullets: [
          'Nada de “zone.js”: perfeito para apps zoneless ou SSR.',
          'Fica claro quem produz e quem consome o estado.',
          'Menos assinaturas manuais: effects são limpos automaticamente.',
        ],
      },
    ],
    quote: {
      text: 'Signals diminuíram o ruído mental na hora de entender o fluxo de dados. Todo mundo sabe onde o estado nasce, quem o transforma e como ele chega ao template.',
      author: 'Emanuel Wellyngton',
      role: 'Desenvolvedor Fullstack',
    },
  };

  readonly keyTakeaways: string[] = [
    'Comece com estado local: um signal para dados brutos e computed para derivados.',
    'Use effect apenas para side-effects; evite lógica de negócio dentro dele.',
    'Mantenha as escritas centralizadas em métodos do componente ou serviço.',
    'Combine signals com injeção de dependência para serviços reativos e reusáveis.',
  ];

  readonly resources: ResourceLink[] = [
    { label: 'Documentação oficial de Signals', href: 'https://angular.dev/guide/signals' },
    { label: 'Padrões de reatividade no Angular', href: 'https://angular.dev/guide/signals/architecture' },
    { label: 'Exemplos práticos no StackBlitz', href: 'https://stackblitz.com/edit/angular-signals' },
  ];

  readonly sampleCode = `import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-reading-progress',
  standalone: true,
  template: \`<section>
    <h3>{{ title() }}</h3>
    <p>{{ excerpt() }}</p>
    <button (click)="toggleFavorite()">
      {{ isFavorite() ? 'Remover' : 'Favoritar' }}
    </button>
    <p class="muted">Progresso: {{ progress() }}%</p>
  </section>\`,
})
export class ReadingProgressComponent {
  readonly title = signal('Signals no Angular 17+');
  readonly excerpt = signal('O jeito moderno de lidar com reatividade.');
  readonly wordsRead = signal(420);
  readonly totalWords = signal(1200);

  readonly progress = computed(() =>
    Math.min(100, Math.round((this.wordsRead() / this.totalWords()) * 100)),
  );

  readonly isFavorite = signal(false);

  constructor() {
    effect(() => {
      console.log('Progresso atualizado:', this.progress());
    });
  }

  toggleFavorite(): void {
    this.isFavorite.update((favorited) => !favorited);
  }
}
`;
}
