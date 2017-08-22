import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { ExamService } from './../exam.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  bids: number[] = [0, 0, 0];
  products = [];
  max = [0, 0, 0];
  valid = [true, true, true]

  constructor(private _route: Router, private _exam: ExamService) { }

  ngOnInit() {
    this._exam.checkLoggedIn()
      .then(data => {
        console.log(data);
        if (!data.id) {
          this._route.navigate(["/"]);
        }
      })
    this._exam.getBids()
      .then(data => {
        this.products = data;
        this.getMax();
      })
      .catch(err => {
        console.log(err);
      })
  }

  isValid(index) {
    if (this.bids[index] > this.max[index]) {
      this._exam.addBet({"bid": this.bids[index], "name": "Product " + (index + 1)})
      this._exam.getBids()
        .then(data => {
          this.products = data;
          this.getMax();
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      this.valid[index] = false;
    }
  }

  results() {
    let allBets = 0;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i]['bids'].length < 1) {
        allBets++;
      }
    }
    if (allBets == 0) {
      this._route.navigate(['results']);
    } else {
      alert("Cannot end the bid. \n" + allBets + " product(s) does not have any bid yet.");
    }
  }

  getMax() {
    for (let i = 0; i < this.products.length; i++) {
      for (let bid of this.products[i].bids) {
        if (this.max[i] < bid.bid) {
          this.max[i] = bid.bid
        }
      }
    }
    console.log(this.max)
  }
}
