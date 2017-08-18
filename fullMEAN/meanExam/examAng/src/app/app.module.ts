import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GameComponent } from './game/game.component'

import { ExamService } from './exam.service';
import { NewQuestionComponent } from './game/new-question/new-question.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { ScoresComponent } from './game/scores/scores.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GameComponent,
    NewQuestionComponent,
    PlayGameComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
