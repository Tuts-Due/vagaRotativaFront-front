import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {
  

  displayedColumns: string[] = ['id', 'nome', 'numeroTelefone', 'carro', 'acoes'];
  constructor() { }

  ngOnInit(): void {
  }


}
