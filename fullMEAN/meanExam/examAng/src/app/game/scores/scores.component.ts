import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { ExamService } from './../../exam.service'

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  users = []
  constructor(private _route: Router, private _exam: ExamService) { }

  ngOnInit() {
    this._exam.getScores()
      .then(data => {
        this.users = data;
      })
      .catch(err => {
        console.log(err)
      })
  }
}
