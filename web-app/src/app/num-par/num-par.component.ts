import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-par',
  templateUrl: './num-par.component.html',
  styleUrls: ['./num-par.component.css']
})
export class NumParComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
function(){
  let cont;
  while (cont <= 100) {

    const resto = cont % 2;
    if (resto === 0){
            console.log('Par ' + cont);
        }
    cont = cont + 1;
    }
  }

}
