# Task Manager App

This project was generated with [Angular CLI] version 18.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project.

## Interview Task Description

### Task Overview

This project is a simple Task Manager Angular application. The main components of the project are:

- `app.component.ts`: The root component that includes the task form and task list components.
- `task-form.component.ts`: The component responsible for adding new tasks.
- `task-list.component.ts`: The component responsible for displaying the list of tasks.

Note: You do not need to worry about the styles, as they are already provided.

### Task Instructions

1. **Add Task Functionality**: Implement the logic to add a new task to the task list.
2. **Render Tasks**: Implement the logic to dynamically render tasks in `task-list.component.html`.
3. **Remove Task Functionality**: Implement the logic to remove a task from the task list.
4. **Form Validation**:
  - Add validation for the form: the title must contain at least 3 characters, and the description must contain at least 5.
  - Disable the submit button when the form is invalid.
  - Add the `is-invalid` class to inputs if they are invalid.
5. **Reset Task Form**: Reset the task form after successfully adding a new task.
