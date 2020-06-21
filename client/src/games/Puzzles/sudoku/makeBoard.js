//immutable object is one that cannot be modified after it is created
// fromJS turns objects and array into immutable structures
//objects are converted into maps
// arrays are converted into lists

//persistent - can only modify the most recent state
//structural sharing,

import { List, fromJS } from 'immutable';


mutability there is no history to changes, code unpredictable
//harder to test, can time travel bug
//immutable world
//no way of changing internal state
//reference is always assigned to newly created object
//equality is a more reliable,
//have a copy of original and copy

//how to solve issue of immutable perfomrance and too many copies
//im,utable ata structure, state never cahnges
//persistent- have access to all the versions of the state
//partially persistent data structure - can only modify most recent state


//structural sharing
//ets says original menu as leaves of a tree , 2 leaves(4 items) for each node, 2 nodes, 1 root

//cant mutate the state, still want to copy of original state,
//want to modify seventh item
//makea new copy of the righght node, made a new parent root
//still sharing data even though we added something new
//recycle as much as possible minimize the  copying

//can use old version and new version consistently, 

//immutablejs library, List and Map

//an immutable map

//a unordered collection of key value pairs, have to pass an object to immmutable.map,
//all keys are converted to a string
//a key can be any type even an array
//cam compare maps using immutable.is-active
//map you can only pass an object
//can pass a nested array
['first item', 'fries'] //that would be an array with key and value , so only 2 values in each nested array
//all values must be unique

//immutable can track the cahnges

//List data structure, can only pass array to list,
//if you pass a string to list, return an array, which each of the characters, list.of for array with strings

//new list with from a ajavascript array


//this creates an array of 10 0s
//countObj = [0,0,0,0,0,0,0,0,0,0]
function makeCountObject(){
    const countObj = []
    for(let i = 0; i <10;i+=1)countObj.push(0)
    return countObj
}

//this takes the puzzle array of cell, cell
//i think the purpose of making 3 arrays is to test the new entry against the three arrays to make sure the value is not in the column or row positin that woud collide
//and that it is not in the square array at all
function makeBoard({puzzle})    {
    const rows = Array.from(Array(9).keys()).map(() =>makeCountObject())
    //this creates 9 arrays, each array contains 10 0s
    const columns = Array.from(Array(9).keys()).map(() => makeCountObject())
    //this creates another 9 arrays with each array containing 10 0s
    const squares = Array.from(Array(9).keys()).map(() => makeCountObject())
    
    //puzzle.map is going through each array item of 9 cells
    // [cell, cell, cell...]
    const result = puzzle.map((row, i) =>(
        //then we are mapping through each cell item within the 9, 9 cell arrays
        row.map((cell, j =>{
            //so if the value is cell
                    
            if(cell) {
                rows[i][cell]+=1
                columns[j][cell]+=1
                squares [((Math.floor(i/3)*3))+ Math.floor(j/3)[cell]]+=1
             
            }
            return {
                value: puzzle[i][j] >0 ? puzzle[i][j]: null,
                prefilled: !!puzzle[i][j]
            }
        }))
    ))
    return fromJS({puzzle: result, selected: false, choices : {rows, columns, squares}})
}


import React from 'react';

function Game(props) {
    const generateGame = (finalCount = 20)=>{
        const solution = makePuzzle()
        const {puzzle}= pluck(solution, finalCount)
        const board = makeBoard({puzzle})
        this.setState({board})
    }
    return (
        <div>
            
        </div>
    );
}

export default Game;