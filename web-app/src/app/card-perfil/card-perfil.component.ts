import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css'],
})
export class CardPerfilComponent implements OnInit {

public imagem = 'https://i.pinimg.com/originals/32/d6/73/32d673fc366ffc6028664c923909df0f.jpg';
public exibe = false;
public descricao = 'Disciplina de Programação';
public usuario = 'Thiago Gambati';
public profissao = 'Estagiário';

public lista = [

{
  id: '1',
  year: '2007',
  cert: 'SCJP 1.5'
},

{
  id: '2',
  year: '2009',
  cert: 'SCWCD 1.5'
},

{
  id: '3',
  year: '2011',
  cert: 'CTFL'
},

];

public buttons = {
  show: 'Exibir',
  hide: 'Ocultar',
};

  constructor() { }

  ngOnInit(): void {}



// tslint:disable-next-line:typedef
public exibePerfil(){
    this.exibe = true;
  }


// tslint:disable-next-line:typedef
public ocultaPerfil(){
    this.exibe = false;
    }
}
