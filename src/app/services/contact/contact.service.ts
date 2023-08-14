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

  getContacts(
    page: string = '1',
    keyword: boolean = true
  ): Observable<HttpResponse<ContactDto[]>> {
    const url: string = `${environment.apiUrl}/contact/get-all?page=${page}&keyword=${keyword}`;
    return this.http.get<HttpResponse<ContactDto[]>>(url);
  }

  deleteContact(msgId: string): Observable<HttpResponse<{ deleted: boolean }>> {
    const url: string = `${environment.apiUrl}/contact/delete/${msgId}`;
    return this.http.delete<HttpResponse<{ deleted: boolean }>>(url);
  }
}
