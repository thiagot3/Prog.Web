import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  formCadastro: FormGroup;

  constructor() {

    this.formCadastro = new FormGroup({
        nome: new FormControl(null, Validators.compose([Validators.required,
        Validators.minLength(5), Validators.maxLength(50)])),
        email: new FormControl(null, Validators.required),
        telefone: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  enviar(){
    // tslint:disable-next-line:prefer-const
    let dados = `
    Nome: ${this.formCadastro.value.nome}
    Telefone: ${this.formCadastro.value.telefone}
    Endereço: ${this.formCadastro.value.endereco}
  `;

    console.log(dados);

  }
}
