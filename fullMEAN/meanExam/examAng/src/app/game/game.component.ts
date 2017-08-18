import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { ExamService } from './../exam.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  questions = [];
  constructor(private _exam: ExamService, private _route: Router) { }

  ngOnInit() {
    this._exam.checkLoggedIn()
      .then(data => {
        console.log(data)
        if (!data.id) {
          this._route.navigate(["/login"])
        }
      })
      .catch(err => console.log(err))
    this._exam.getQs()
      .then(qs => {
        console.log(qs)
        this.questions = qs
      })
      .catch(err => {
        console.log(err)
      })
  }

}
