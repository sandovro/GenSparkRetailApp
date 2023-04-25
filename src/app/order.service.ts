import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) {}

    public getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>('${this.apiServerUrl}/')
    }

    public addOrder(order: Order): Observable<Order> {
        return this.http.post<Order>('${this.apiServerUrl}/', order)
    }

    public deleteOrder(orderId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/${orderId}')
    }



}