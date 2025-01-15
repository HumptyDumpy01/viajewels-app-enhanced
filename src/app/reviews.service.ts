import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JewelryReviewType } from '../../data/JEWELRY';
import { catchError, map, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private httpClient = inject(HttpClient);

  fetchHighReviews() {
    return this.fetchAllReviews(`${environment.backendUrl}/reviews`).pipe(
      map((reviews) => (reviews?.data as JewelryReviewType[])
        .filter((review) => review.rated >= 4))
    );
  }

  fetchAllReviews(url: string) {
    const reviews = this.httpClient.get<ReviewResponseType>(url, {
      observe: `response`
    }).pipe(
      map(resData => resData.body),
      catchError((err, _) =>
        throwError(() => {
          new Error(err.message);
        })));
    return reviews;
  }

  fetchReviewsByJewelId(jewelId: number) {
    return this.fetchAllReviews(`${environment.backendUrl}/jewelry/${jewelId}/reviews`);
  }
}

export type ReviewResponseType = {
  status: StatusType,
  data: JewelryReviewType[] | { error: string }
};

export type StatusType = `success` | `error` | `fail`;
