import { Injectable } from '@angular/core';
import { value } from 'src/main';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public notify = new BehaviorSubject<any>('');

  notifyObservable$ = this.notify.asObservable();

  data = value;

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  public getData() : string {
    return this.data;
  }
}