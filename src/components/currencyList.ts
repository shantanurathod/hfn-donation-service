// import { ListTypes, ListType } from "./DropDown"

export interface ListType{
    name: string; code: string; symbol: string; amounts: number[], min: number, max: number
}

export interface ListTypes extends Array<ListType>{}

export let currencyList: ListType[] = []

currencyList = 
[{name: "US Dollar",code: "USD",symbol: "$",  amounts: [25, 50, 120], min: 1, max: 1000000},
{name: "Indian Rupee",code: "INR",symbol: "₹", amounts: [2000, 5000, 10000], min: 10, max: 1000000},
]

