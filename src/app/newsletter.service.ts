import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.backendUrl}/newsletter`;

  submitNewsletter(email: string): Observable<any> {
    const payload = {
      email: email
    };

    return this.httpClient.post(this.apiUrl, payload);
  }
}
