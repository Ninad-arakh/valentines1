import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-indx',
  templateUrl: './indx.component.html',
  styleUrls: ['./indx.component.css']
})
export class IndxComponent implements OnInit {

  fist: number = 0;
  msg:string="No";
  color:string = "size";
  

  constructor(private router:Router){

  }
  ngOnInit(): void {
  }

  btn1(one: string) {
    if(this.fist <=2){
      this.router.navigate(['/img']);
      // this.router.navigate(['/form'])
      
    }
    else if(this.fist > 2){
      this.router.navigate(['/mpr'])
      
    }
  }



  btn2(two: any) {
    
    switch (this.fist) {
      case 1: this.msg = "Are you sure?";
        this.color = "size1"
        this.fist++;
        break;

      case 2: this.msg = "Really sure?";
      this.color = "size2"
        this.fist++;
        break;

      case 3: this.msg = "Think again";
      this.color = "size3"
        this.fist++;
        break;

      case 4: this.msg ="Last chance";
      this.color = "size4"
        this.fist++;
        break;

      case 5: this.msg = "Surely not?";
      this.color = "size5"
        this.fist++;
        break;

      case 6: this.msg = "You might regret this!";
      this.color = "size6"
        this.fist++;
        break;

      case 7: this.msg = "Give it another thought!";
      this.color = "size7"
        this.fist++;
        break;

      case 8: this.msg = "This could be a mistake";
      this.color = "size8"
        this.fist++;
        break;

      case 9: this.msg = "You are breaking my heart!";
      this.color = "size9"
        this.fist = 1;
        break;

      default: this.msg = "Please";
        this.fist++;
        break;
    }

  }
}


