import { Routes } from '@angular/router';
import { Home } from './app/pages/home/home';
import { BlogPostComponent } from './app/components/blog-post/blog-post.component';

export const AppRoutes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "post",
        component: BlogPostComponent
    }
];