import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './pages/about/about.component';






@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([{path:'', component: AboutComponent},
      {path:'contact-me', component: ContactMeComponent},
    {path:'about' , component: AboutComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
