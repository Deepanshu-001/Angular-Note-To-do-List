import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './Component/notes-list/notes-list.component';

import { NotesItemsComponent } from './Component/notes-items/notes-items.component';
import { AddTodoComponent } from './Component/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponentComponent } from './Component/about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
   
    NotesItemsComponent,
        AddTodoComponent,
        AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
