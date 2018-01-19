import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApidataService } from '../apidata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contents = {
    subject: '',
    fromEmail: '',
    message: ''
  }

  public messageResponse;
  url = "https://rw4ok5yri5.execute-api.us-east-2.amazonaws.com/dev/portemailer";

  constructor(private _apiService: ApidataService, private router: Router) { }

  ngOnInit() {
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  sendEmailToCompany() {
    var subject = this.contents['subject'];
    var email = this.contents['fromEmail'];
    var message = this.contents['message'];

    if (subject.length < 3  || message.length < 10 || !this.validateEmail(email)) {
      return
    }else{
      var sendUrl = this.url +
                    '?subject=' +  subject +
                    '&fromEmail=' + email +
                    '&message=' + message;

      this.contents['subject'] = '';
      this.contents['fromEmail'] = '';
      this.contents['message'] = '';

      this._apiService.sendEmail(sendUrl).subscribe(
        data => { this.messageResponse = data },
        error => console.error(error),
        () => console.log('done loading')
      );

      this.router.navigate(['']);
    }
  }

}
