import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [ {path:'contact-me', component: ContactMeComponent},
{path:'about' , component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
