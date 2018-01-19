import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApidataService {

  constructor(private http:HttpClient) { }

  sendEmail(url) {
    return this.http.get(url);
  }




    // var creds = 'subject=' + email.subject + '&fromEmail=' + email.fromEmail + '&message=' + email.message;
    // this.http.post('https://rw4ok5yri5.execute-api.us-east-2.amazonaws.com/dev/portemailer', creds).subscribe(data) => {
    //   if(data.json().success) {
    //
    //   }else{
    //     console.log("something went wrong with the json data", data);
    //   }
    // }

}
