import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from 'src/about/about.component';
import { ContactComponent } from 'src/contact/contact.component';
import { HomeComponent } from 'src/home/home.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { WildCardComponent } from 'src/wild-card/wild-card.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeService } from './services/home.service';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JavascriptComponent } from 'src/javascript/javascript.component';
import { ClientComponent } from 'src/client/client/client.component';
import { ClientInfoComponent } from 'src/client/client-info/client-info.component';
import { ClientDataComponent } from 'src/client/client-data/client-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WildCardComponent,
    NavbarComponent,
    AboutComponent,
    PostsComponent,
    JavascriptComponent,
    ClientComponent,
    ClientInfoComponent,
    ClientDataComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
