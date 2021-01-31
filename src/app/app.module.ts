import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogAllComponent } from './pages/blog/blog-all/blog-all.component';
import { BlogSingleComponent } from './pages/blog/blog-single/blog-single.component';
import { ProjectAllComponent } from './pages/work/project-all/project-all.component';
import { ProjectSingleComponent } from './pages/work/project-single/project-single.component';
import { ResumeComponent } from './partials/resume/resume.component';
import { MobileMenuComponent } from './partials/mobile-menu/mobile-menu.component';

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
    ProjectSingleComponent,
    ResumeComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
