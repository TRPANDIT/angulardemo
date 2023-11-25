import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { CopyDataComponent } from './copy-data/copy-data.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RainbowComponent,
    PersonDetailsComponent,
    BookDetailsComponent,
    CopyDataComponent,
    TodoListComponent
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
