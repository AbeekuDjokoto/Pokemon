import React from "react"

// Basic Types
let id: number = 1;
let company: string = "Traversy media";
let isPublished: boolean = true;
let x: any = "String"

// array
let array: number[] = [1,2,3, 4]
let any: any[] = ["!", 1]


// Tuple
let tub: [number, string, boolean] = [1, "That", true ]
// Tuple Array
let tubArr: [number, boolean][] = [
    [1, true],
    [2, false]
]

// Union
let union: string | number = "String"

// enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "String",
    Down = "Other",
    Left = "Left",
    Right = "Right"
}

// Objects

// first way
const obj: {
    id: number,
    firstName: String
} = {
    id: 1,
    firstName: "Abeeku",
}

// better way
type User = {
    id: number,
    firstName: String
}

const userProfile: User = {
    id: 1,
    firstName: "Abeeku"
}

// type Assersion
let cid: any = 1
// let customerId: <number>cid
let customerId = cid as number

// using types in functions
function addNumber(x: number, y: number): number {
    return x + y;
}

function message(message: string | number):void {
    console.log(message)
}

// Interface
interface UserInterface {
    id: number,
    firstName: String,
    // optional
    age?: number
}

const userProfile1: UserInterface = {
    id: 1,
    firstName: "Abeeku"
}

interface MathFunc {
    (x:number, y:number):number
}


const arrFunc: MathFunc = (x: number, y:number) => x + y


arrFunc(1, 2)

// Generics
function getArray<T>(items: T[]):T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["!", "2", "3"]);

// using react
export interface Props {
    title: string
    color?: string
}

const Header = (props: Props) => {
    return (
        <header>
            <h1></h1>
        </header>
    )
}