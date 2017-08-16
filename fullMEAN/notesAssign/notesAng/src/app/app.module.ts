import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AnonNoteComponent } from './anon-note/anon-note.component';

import { NoteCallsService } from './note-calls.service'


@NgModule({
  declarations: [
    AppComponent,
    AnonNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [NoteCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
