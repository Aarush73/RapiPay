import { Component, OnInit } from '@angular/core';
import {value} from 'src/main';
import { DataService } from 'src/app/services/data.service';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {
  val:string = value;
  constructor() { 
  }

  dataService = new DataService();

  ngOnInit(): void {
  //   this.dataService.notifyObservable$.subscribe(res => {
  //     if (res.refresh) {
  //        // get your grid data again. Grid will refresh automatically
  //        this.dataService.getData();
  //     }
  //  })
      let l1 = document.getElementById('l1')
      let l2 = document.getElementById('l2')
      let l3 = document.getElementById('l3')
  }

}

// function Value(val:string) {
//   value.
// }
