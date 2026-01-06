import { Routes } from '@angular/router';
import { Home } from './app/pages/home/home';
import { BlogPostComponent } from './app/components/blog-post/blog-post.component';
import { BlogComponent } from './app/components/blog/blog.component';
import { blogPostResolver } from './app/resolvers/blog-post.resolver';

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
        component: BlogComponent,
    },
    {
        path: "blog/post/:id",
        title: "Post | " + websiteTitle,
        component: BlogPostComponent,
        resolve: { post: blogPostResolver }
    }
];