import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  me() {
    return this.httpClient.get('http://localhost:3000/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
}
