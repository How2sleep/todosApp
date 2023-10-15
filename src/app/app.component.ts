import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'expass6';

    summary: string = '';
    description: string = '';
    
    private url = "http://localhost:8080"

    constructor(private http: HttpClient) { }


    todos: any[] = [];

    getTodos() {
        this.http.get(this.url + "/todos").subscribe(data => {
            console.log(data);
            this.todos = data as any[];
    })
    };

 

    deleteTodo(id: string) {
        this.http.delete(this.url + "/todos/" + id).subscribe(data => {
            console.log(data);
            this.todos = this.todos.filter((item) => item !== data);
        });
    }


    addTodo() {
        this.http.post(this.url + "/todos", {"summary": this.summary, "description": this.description}).subscribe(data => {
            console.log(data);
            this.todos.push(data);
        });
    }

}