import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './Component/about-component/about-component.component';
import { NotesListComponent } from './Component/notes-list/notes-list.component';


const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'ap', component: AboutComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
