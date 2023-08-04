import { environment } from './../../../environment/environment';
import { ContactDto } from './../../data/Dto/contact.dto';
import { HttpResponse } from './../../data/Dto/http.response.dto';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  contact(model: ContactDto): Observable<HttpResponse<ContactDto>> {
    const url: string = `${environment.apiUrl}/contact`;
    return this.http.post<HttpResponse<ContactDto>>(url, model);
  }
}
