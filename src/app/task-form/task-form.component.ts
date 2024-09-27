import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  @Output() taskAdded = new EventEmitter<Task>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['d', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // TODO: Add validation for the form: the title must contain at least 3 characters, and the description must contain at least 5.
  }

  onSubmit(): void {
    // TODO: Implement the logic for submitting the form
  }
}
