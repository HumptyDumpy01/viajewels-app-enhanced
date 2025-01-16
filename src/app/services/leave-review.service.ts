import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveReviewService {
  private httpClient = inject(HttpClient);

  submitReview(jewelId: number, initials: string, email: string, rated: number, review: string, createdAt: string): Observable<any> {
    const payload = {
      jewelId,
      initials,
      email,
      rated,
      review,
      createdAt
    };

    return this.httpClient.post(`${environment.backendUrl}/reviews/${jewelId}`, payload);
  }

  updateJewelReviewRating(jewelId: number, rating: number): Observable<any> {
    return this.httpClient.patch(`${environment.backendUrl}/jewelry/${jewelId}/rating/${rating}`, {});
  }

}
