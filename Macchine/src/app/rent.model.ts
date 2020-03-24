import { Driving } from './driving.model';

export class Rent {
  driving : Driving;
  nRent : number;
  constructor(driving : Driving ,nRent:number )
  {
      this.driving=driving;
      this.nRent= nRent;
  }

}
