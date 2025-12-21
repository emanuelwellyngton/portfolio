import { Routes } from '@angular/router';
import { Home } from './app/pages/home/home';
import { BlogPostComponent } from './app/components/blog-post/blog-post.component';
import { BlogComponent } from './app/components/blog/blog.component';

const websiteTitle = "wellyngton.dev";

export const AppRoutes: Routes = [
    {
        path: "",
        title: "Home | " + websiteTitle,
        component: Home
    },
    {
        path: "blog",
        title: "Blog | " + websiteTitle,
        component: BlogComponent
    }
];