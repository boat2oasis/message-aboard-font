// data.service.ts
import { Injectable, } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams  } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageAboardService {
  private getList = environment.apiUrl+"/messageBoard/list";
  private postAcocuntData = environment.apiUrl+"/messageBoard/save";

  private replyUrl = environment.apiUrl+"/messageBoard/reply";

  private getOutList = environment.apiUrl+"/messageBoard/out/list";

  private callSource = new Subject<void>();
  callSelectData$ = this.callSource.asObservable();

  triggerSelectData() {
    this.callSource.next();
  }
  constructor(private http: HttpClient) { }
  
  selectData(pageSize: number, currentPage: number): Observable<any> {
    const params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('currentPage', currentPage.toString());
    return this.http.get(this.getList,{ params }); // Make a GET request
  }

  selectOutData(pageSize: number, currentPage: number): Observable<any> {
    const params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('currentPage', currentPage.toString());
    return this.http.get(this.getOutList,{ params }); // Make a GET request
  }

  // Method to fetch data from the API
  postData(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.postAcocuntData, data, { headers });
  }

  // Method to fetch data from the API
  reply(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.replyUrl, data, { headers });
  }

}
