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

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
//
// type TupleToObject<A extends readonly string[]> = { [K in A[number]]: K }
//
// type result = TupleToObject<typeof tuple>

//4. First of Array

// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]
//
// type First<Arr extends any[]> = Arr extends [] ? never : Arr[0]
//
// type head1 = First<arr2>

//5. Length of Tuple

// type tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
//
// type Length<T extends readonly any[]> = T['length']
//
// type spaceXLength = Length<spaceX>

//6. Exclude

type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
