import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  
  id: number
  employee: Employee = new Employee ()
  
  constructor(private employeeService : EmployeeService,
    private router: Router,
    private route:ActivatedRoute){ }

  ngOnInit(): void {  
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {this.employee = data;},
      error => console.error()
      );
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(
      data => {this.employee = data;},
      error => console.error()
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }


  onSubmit(){
    this.updateEmployee();
    this.goToEmployeeList();
  }
  
}
