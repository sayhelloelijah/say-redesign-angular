import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogAllComponent } from './pages/blog/blog-all/blog-all.component';
import { BlogSingleComponent } from './pages/blog/blog-single/blog-single.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectAllComponent } from './pages/work/project-all/project-all.component';
import { ProjectSingleComponent } from './pages/work/project-single/project-single.component';

const routes: Routes = [
  {path: '/', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogAllComponent},
  {path: 'blog/blog-single', component: BlogSingleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'work', component: ProjectAllComponent},
  {path: 'work/work-single', component: ProjectSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
