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

  getBids() {
    return this._http.get("/getBids")
      .map(user => user.json())
      .toPromise()
  }

  addProduct(info) {
    return this._http.post("/addProduct", info)
      .map(data => data.json())
      .toPromise()
  }

  addBet(bet) {
    return this._http.post("/addBet", bet)
      .map(data => data.json())
      .toPromise()
  }

  getID() {
    return this._http.get("/getID")
      .map(data => data.json())
      .toPromise()
  }

  restartBid() {
    return this._http.get('/restart')
      .map(data => data.json())
      .toPromise()
  }

}
