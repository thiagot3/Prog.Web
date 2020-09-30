import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm){
    // tslint:disable-next-line:prefer-const
    let dados = `
    Nome: ${form.value.nome}
    Telefone: ${form.value.telefone}
    Endereço: ${form.value.endereço}
  `;
    console.log(dados);

  }

}
