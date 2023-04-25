import { Order } from "./order";

export interface User{
    email: string;
    password: string;
    data: {orders?: Order[]}
}