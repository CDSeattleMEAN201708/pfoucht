import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component'
import { GameComponent } from './game/game.component'
import { NewQuestionComponent } from './game/new-question/new-question.component'
import { PlayGameComponent } from './play-game/play-game.component'
import { ScoresComponent } from './game/scores/scores.component'

const routes: Routes = [
  { path: 'login', component: UsersComponent },
  { path: "lets_play", component: PlayGameComponent },
  { path: '', pathMatch: "full", component: UsersComponent },
  { path: "game", component: GameComponent,
    children: [
      {path: "new_question", component: NewQuestionComponent},
      {path: "scores", component: ScoresComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
