import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../services/student.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-student',  
  templateUrl: './student.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class StudentComponent implements OnInit {
  
   settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
   
      name: {
        title: 'First Name',
        type: 'string',
      },      
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  //students:Array<any>;
  constructor(private _StudentService : StudentService) {
    this.getStudentList();
   }
   getStudentList = function(){
    this._StudentService.getStudents().subscribe(response => this.source = response);
   }

  ngOnInit() {
  }

}
