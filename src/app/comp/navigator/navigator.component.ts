import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  constructor() { 
    
  }

  ngOnInit(): void {
    let a1 = document.getElementById('a1');
    a1?.addEventListener('click', this.refreshGridInAnotherComponent)
    console.log(a1)
  }

  dataService = new DataService()

  refreshGridInAnotherComponent() {
    this.dataService?.notifyOther({
       refresh: true
    });
  }
}