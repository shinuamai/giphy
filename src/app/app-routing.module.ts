import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GiphyComponent } from './giphy/giphy.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'giphy', component: GiphyComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '/pagenotfound', pathMatch: 'full'},
  { path: 'pagenotfound', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
