import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl + '/projects';

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.apiUrl);
    }
}
