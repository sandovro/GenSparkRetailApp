import { Item } from "./item";

export interface Order{
    orderId: number;
    email: string;
    orderTotal: number;
    data: {items?: Item[]}
}