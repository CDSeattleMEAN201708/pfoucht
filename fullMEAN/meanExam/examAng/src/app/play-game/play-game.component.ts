import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { ExamService } from './../exam.service'

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  questions = []
  answer1 = ""
  answer2 = ""
  answer3 = ""
  constructor(private _exam: ExamService, private _route: Router) { }

  ngOnInit() {
    this.questions = [];
    this._exam.getQs()
      .then(qs => {
        for (let i = 0; i<3; i++) {
          let random = Math.floor(Math.random() * qs.length);
          if (qs[random]) {
            this.questions.push(qs[random]);
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  gameSubmit() {
    let score = 0;
    if (this.answer1 == this.questions[0].answer) {
      score++;
    }
    if (this.answer2 == this.questions[1].answer) {
      score++;
    }
    if (this.answer3 == this.questions[2].answer) {
      score++;
    }
      this._exam.updateScore({"score":score})
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
      this._route.navigate(["game", "scores"])
  }

}
