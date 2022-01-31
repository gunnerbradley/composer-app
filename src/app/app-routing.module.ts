import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  { path: 'composer-app/composers', component: ComposerListComponent },
  { path: 'composer-app/contact', component: ContactComponent },
  { path: 'composer-app/about', component: AboutComponent },
  { path: 'composer-app/composer-details/:composerId', component: ComposerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
