import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listatarefas',
  templateUrl: './listatarefas.component.html',
  styleUrls: ['./listatarefas.component.css']
})
export class ListatarefasComponent implements OnInit {
  tarefa = '';
  listatarefas: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  adicionarTarefa() {
    const tarefa = {
      nome: this.tarefa,
      finalizada: false
    };
    this.listatarefas.push(tarefa);
    console.log(this.listatarefas);
    this.tarefa = '';
  }
  eliminarTarefa(index: number) {
    this.listatarefas.splice(index, 1);
  }
  atualizarTarefa(tarefa, index) {
    this.listatarefas[index].finalizada = !tarefa.finalizada;
  }
}
