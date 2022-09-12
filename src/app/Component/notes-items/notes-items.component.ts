import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-notes-items',
  templateUrl: './notes-items.component.html',
  styleUrls: ['./notes-items.component.css']
})
export class NotesItemsComponent implements OnInit {

  @Input() todo :Todo;
  @Input() i:number;
  @Output() tododelete : EventEmitter<Todo> =new EventEmitter();
  @Output() todocheckbox : EventEmitter<Todo> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo :Todo)
  {
    this.tododelete.emit(todo)
  
    console.log("pressed the button")
  }

  onCheckBox(todo :Todo)
  {
    this.todocheckbox.emit(todo)
  }
}
