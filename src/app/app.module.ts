import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogAllComponent } from './pages/blog/blog-all/blog-all.component';
import { BlogSingleComponent } from './pages/blog/blog-single/blog-single.component';
import { ProjectAllComponent } from './pages/work/project-all/project-all.component';
import { ProjectSingleComponent } from './pages/work/project-single/project-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BlogAllComponent,
    BlogSingleComponent,
    ProjectAllComponent,
    ProjectSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
