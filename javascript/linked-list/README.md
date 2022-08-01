# Collection: Linked List

[Assignment instructions](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/LAB)

## TypeScript Instructions

- Verify your types are correct with `npm run check`
- Verify your implementation is correct with `npm run test`
  - When converting the value in a node to a string, use the `display` function in [`Collection.ts`](./src/Collection.ts).
- DO NOT edit [assignment.test.ts](./src/).
- Add your own tests to [LinkedList.test.ts](./src/LinkedList.test.ts).
- Tests must pass the github workflow for full credit.

## TypeScript resources

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Common Types

- `boolean` is `true` or `false`.
- `number` is any JavaScript number - `5`, `-17`, `22.356`, `3/10`, `Number.MAX_VALUE`, etc.
- `string` is any JavaScript string - `'hello'`, `'goodbye'`, `\`I am ${age}\``
- `interface Person { name: string; age: number; }` is a JavaScript object with two properties, `name` and `age`. `name` must be a string, and `age` must be a number.
- `(name: string, age: number) => Person` is a function with two parameters, `name` (a string) and `age` (a number), which will return an object of type `Person`.
- `() => void` is a function with no arguments, and returns nothing.
  <!-- - `'hello'`' is the JavaScript string `'hello'` and no other string. -->
  <!-- - `'hello'|'goodbye'` is either the JavaScript string `'hello'` or the string `'goodbye'`, and no other strings. -->

# Linked List Implementation 

 Create a linked list class and write the methods to insert a node, verfify in a value is included in the list and return a string of the list.

## Whiteboard Process
N/A

## Approach & Efficiency

The code provided was a great starting point.To insert the node I assigned the head to the new node. To check for inclusion I iterated over the list and checked for the value. To print the list I iterated over the list and used display function.

## Solution

The methods can be impelmented by calling them on the list.  
`const list = new LinkedList<string>();
list.tostring();`


# Linked List Insertion

Write Methods on the linked list class that add a node before and after a specified node. adda method that appends a node to the end of the list.  

## Whiteboard Process

N/A
## Approach & Efficiency

To append to the end of the list I used an if statement to check if there was a first node in the list if there wes not a node I used the insert method I had written previously. If there was a node I iterated to the end of the list and created a new node asigning the previous nodes pointer to the new node. To insert before I  checked the first value against the one taken as an argument then iterated through the list and checked for the values in the node ahead of where I was currently. I then stashed the node in a varible to be reassigned later. and added the node and reassingerd appropriatly. To insert after i uysed the dame process only stashing the previous node.  

## Solution

The methods can be impelmented by calling them on the list.  
`const list = new LinkedList<string>();
list.tostring();`

## Collaboration/Resouces

Jim Doyle, Zayah Lang, Martha Quintanilla-Ramirez.
we have been in a group reviewing eachothers code and they have been super helpful and have shown me alot.

## Notes

I have not yet gotten my tests to run. There might be an issue with my configuration.
