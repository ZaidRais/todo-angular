import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos : Todo[]
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
    // this.todos =[
        //   {
        //   sno:1,
        //   title: "this is title",
        //   desc: "description",
        //   active: true

        // },  {
        //   sno:2,
        //   title: "this is title 2",
        //   desc: "description",
        //   active: true

        // } , {                                                     // emty todo to to add from local storege and make it dynamic 
        //   sno:3,
        //   title: "this is title 3",
        //   desc: "description",
        //   active: true

        // }
    // ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }

  addTodo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo : Todo){
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
  }

}
