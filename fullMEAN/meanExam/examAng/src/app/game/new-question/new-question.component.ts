import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ExamService } from './../../exam.service'
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  q = {
    'question': "",
    'answer': "",
    'fake1': "",
    'fake2': ""
  }

  constructor(private _exam: ExamService, private _route: Router) { }

  ngOnInit() {
  }

  submitQuestion(){
    this._exam.addQuestion(this.q)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    this.q = {
      'question': "",
      'answer': "",
      'fake1': "",
      'fake2': ""
    }
    this.redirectHome()
  }

  redirectHome(){
    this._route.navigate(["game", "scores"])
  }

}
