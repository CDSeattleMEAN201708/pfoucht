import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { ExamService } from './../exam.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = {'name': ""}
  constructor(private _route: Router, private _exam: ExamService) { }

  ngOnInit() {

  }

  login() {
    this._exam.login(this.user)
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err))
    this.user = {"name": ""}
    this._route.navigate(["game", "scores"])

  }

}
