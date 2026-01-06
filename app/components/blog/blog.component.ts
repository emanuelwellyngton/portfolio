import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';


import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  private blogService = inject(BlogService);

  posts = toSignal(this.blogService.getPosts(), { initialValue: [] });
}
