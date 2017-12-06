import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { StudentService } from './student.service';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  studentDetails = {
    studentName: '',
    studentAge: '',
    studentGrade: ''
  };

  dataSource = new StudentDataSource(this.student);
  displayedColumns = ['Name', 'Age', 'Grade'];

  constructor(private student: StudentService, private afs: AngularFirestore) {}

  addStudent() {
    this.student.addStudent(this.studentDetails);
  }
}

export class StudentDataSource extends DataSource<any> {
  constructor(private student: StudentService) {
    super();
  }
  connect() {
    return this.student.getStudents();
  }

  disconnect() {}
}
