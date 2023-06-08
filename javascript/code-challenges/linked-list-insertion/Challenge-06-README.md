# Code Challenge 06 (Linked List Insertion)

Write Methods on the linked list class that add a node before and after a specified node. add a method that appends a node to the end of the list.  

## Whiteboard Process

![whiteboard](./CC06Whiteboard.png)

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

