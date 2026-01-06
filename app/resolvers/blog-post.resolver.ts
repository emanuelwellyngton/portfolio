import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { BlogService } from '../services/blog.service';

export const blogPostResolver: ResolveFn<BlogPost> = (route, state) => {
    const router = inject(Router);
    const service = inject(BlogService);
    const id = Number(route.paramMap.get('id'));

    return service.getPostById(id).pipe(
        catchError(() => {
            router.navigate(['/blog']);
            return EMPTY;
        })
    );
};
