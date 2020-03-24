import { Component } from '@angular/core';
import { Driving } from './driving.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rent } from './rent.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rentList:Rent[] = new Array<Rent>();
  title = 'autolavaggio Fiorito';






}
