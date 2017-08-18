import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"

@Injectable()
export class ExamService {

  constructor(private _http: Http) { }

  login(user) {
    return this._http.post("/loginuser", user)
      .map(user => user.json())
      .toPromise()
  }

  checkLoggedIn() {
    return this._http.get("/checkLoggedIn")
      .map(user => user.json())
      .toPromise()
  }

  addQuestion(question) {
    return this._http.post("/addQ", question)
      .map(user => user.json())
      .toPromise()
  }

  getQs() {
    return this._http.get("/getQs")
      .map(user => user.json())
      .toPromise()
  }

  getScores() {
    console.log("inside exam service to get scores")
    return this._http.get("/getScores")
      .map(user => user.json())
      .toPromise()
  }

  updateScore(score) {
    return this._http.post("/updateScore", score)
      .map(user => user.json())
      .toPromise()
  }
}
