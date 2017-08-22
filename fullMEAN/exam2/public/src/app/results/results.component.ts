import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { ExamService } from './../exam.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results = [{"name":"No bets", "value": 0}, {"name":"No bets", "value": 0}, {"name":"No bets", "value": 0}];
  products = [];
  user: string = "";
  constructor(private _route: Router, private _exam: ExamService) { }

  ngOnInit() {
    this._exam.checkLoggedIn()
      .then(data => {
        console.log(data);
        if (!data.id) {
          this._route.navigate(["/"]);
        }
      })

    this._exam.getID()
    .then(data => {
      this.user = data.name;
    })
    .catch(err => {
      console.log(err)
    })

    this._exam.getBids()
      .then(data => {
        this.products = data;
        console.log(this.products)
        for (let i=0; i<3; i++){
          for (let bid of this.products[i].bids) {
            if (this.results[i].value < bid.bid) {
              this.results[i] = {"name": bid.name, "value": bid.bid}
            }
          }
        }
        console.log("final results: " + this.results)
      })
      .catch(err => {
        console.log(err)
      })

    }

    restart() {
      this._exam.restartBid()
        .then(data => {
          this._route.navigate(['bids'])
        })
        .catch(err => {
          console.log(err)
        })
    }

}
