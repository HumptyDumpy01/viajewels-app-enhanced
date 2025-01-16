import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupportTicketService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.backendUrl}/support`;

  submitSupportTicket(email: string, phone: string): Observable<any> {
    const payload = {
      email: email,
      phone: phone,
      status: 'pending'
    };
    return this.httpClient.post(this.apiUrl, payload);
  }
}
