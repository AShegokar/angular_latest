import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { ContactComponent } from 'src/contact/contact.component';
import { HomeComponent } from 'src/home/home.component';
import { WildCardComponent } from 'src/wild-card/wild-card.component';
import { PostsComponent } from './posts/posts.component';
import { JavascriptComponent } from 'src/javascript/javascript.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: '', component: JavascriptComponent},

  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'post', component:PostsComponent},
  {path: '**', component: WildCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
