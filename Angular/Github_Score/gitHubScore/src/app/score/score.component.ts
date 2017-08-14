import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetGitService } from './../get-git.service'


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  username: string = ""
  data = {}
  score = 0;
  constructor(private _getGitService: GetGitService) {
  }

  dataSubmit() {
    console.log(this.username)
    this._getGitService.getScore(this.username)
      .then(info => {
        this.data = info
        this.score = info.followers + info.public_repos
      })
      .catch(err => {
        console.log(err)
      })
  }

  ngOnInit() {
  }

}
