import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.backendUrl}/create-checkout-session`;

  createCheckoutSession(sessionData: SessionDataType): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(this.apiUrl, sessionData, { headers });
  }
}

export type SessionDataType = {
  items: {
    jewelId: number;
    jewelTitle: string;
    quantity: number;
  }[],
  shippingDetails: ShippingDetailsType,
  totalCheckout: number;
}

export type ShippingDetailsType = {
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  country: string;
  state: string;
  zipCode: number;
  email: string;
  phone: string;
}
