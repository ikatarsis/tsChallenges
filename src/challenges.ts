//1. Pick
// interface Todo {
// 	title: string,
// 	// description: string,
// 	completed: boolean
// }
//
// type MyPick<T, K extends keyof T> = { [Key in K]: T[Key] }
//
// type TodoPreview = MyPick<Todo, 'title' | 'completed'>
//
// const todo: TodoPreview = {
// 	title: 'gg',
// 	completed: true
// }
// todo


//2. ReadOnly

// type MyReadonly<T> = { readonly [Key in keyof T]: T[Key]}
//
// const todo: MyReadonly<Todo> = {
// 	title: 'cat',
// 	completed: false
// }
//
// todo.title = dog

//3. Tuple to Object


