import { AboutComponent } from '@/app/components/about/about.component';
import { BlogComponent } from '@/app/components/blog/blog.component';
import { HeroComponent } from '@/app/components/hero/hero.component';
import { ProjectsComponent } from '@/app/components/projects/projects.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    BlogComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
