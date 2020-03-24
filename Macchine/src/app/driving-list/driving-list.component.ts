import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driving } from '../driving.model';
import { Observable } from 'rxjs';
import { Rent } from '../rent.model';


@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  @Input() rentList : Rent[];
  data:Driving;
  listaM:Driving[];
  obser:Observable<Driving[]>;
  selectedCar:Driving;
  constructor(public http:HttpClient){}
  ngOnInit(){
    this.listaM=new Array<Driving>();
    this.obser=this.http.get<Driving[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi");
    this.obser.subscribe(this.getDriving);
  }
  getDriving = (data:Driving[]) =>
  {
      this.listaM = data;
  }
  noleggiami(data : Driving) :boolean
  {
      console.log(data);
      this.selectedCar=data;
      this.rentList.push(new Rent(data,1));
      return false;
  }

}
