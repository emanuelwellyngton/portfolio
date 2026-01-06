import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { environment } from '@/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl + '/api/blog/posts';

    getPosts(): Observable<BlogPost[]> {
        return this.http.get<BlogPost[]>(this.apiUrl);
    }

    getPostById(id: number): Observable<BlogPost> {
        return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
    }
}
