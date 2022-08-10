import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1 : string
  num2 : string
  resultado : string

  constructor() {}

  somar(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)

    var soma = n1 + n2
    this.resultado = soma.toString()
  }

  subtrair(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)

    var sub = n1 - n2
    this.resultado = sub.toString() 
  }

  multiplicar(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)

    var mult = n1 * n2
    this.resultado = mult.toString()
  }

  dividir(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)
    if(n2 != 0){
      var div = n1 / n2
      this.resultado = div.toString()
    }
    else{
      this.resultado = "Divisor igual a 0"
    }
    
  }



}
