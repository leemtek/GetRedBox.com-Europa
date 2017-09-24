import { Component } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

// Enables jQuery
declare var $:any;

@Component({
    selector: "grb-main-home-contact-us",
    template: `
        <h2 class="title">Contact Us</h2>
        <form #contactUsForm="ngForm" class="margin-clear" (ngSubmit)="mdSend()">
            <div class="form-group has-feedback mb-10">
                <label class="sr-only" for="name">Name</label>
                <input type="text" class="form-control" placeholder="Your Name" 
                    name="name" required
                    [(ngModel)]="objSenderInfo.strName"
                />
                <i class="fa fa-user form-control-feedback"></i>
            </div>
            <div class="form-group has-feedback mb-10">
                <label class="sr-only" for="email">Email address</label>
                <input type="email" class="form-control" placeholder="Your Email" 
                    name="email" required
                    [(ngModel)]="objSenderInfo.strEmail"
                />
                <i class="fa fa-envelope form-control-feedback"></i>
            </div>
            <div class="form-group has-feedback mb-10">
                <label class="sr-only" for="message2">Message</label>
                <textarea class="form-control" rows="4" placeholder="Message"
                    name="message" required
                    [(ngModel)]="objSenderInfo.strMessage"
                ></textarea>

                <i class="fa fa-pencil form-control-feedback"></i>
            </div>
            <div>
            <re-captcha 
                (captchaResponse)="mdCaptchaHandle($event)" 
                (captchaExpired)="mdCaptchaExpired()"
                site_key="6LcNoiMTAAAAANo5Nce1eKUXJ8ilUy1n4sg7khRu"
            ></re-captcha>
            </div>
            <button id="contactUsBtnSubmit" type="submit" class="btn btn-success"
                [disabled]="contactUsForm.invalid || this.objSenderInfo.googleResponse === null"
            >Submit</button>
        </form>
    `,
    styles: [`
        .ng-valid[required], .ng-valid.required  {
            border-left: 5px solid #42A948; /* green */
        }

        .ng-invalid:not(form)  {
            border-left: 5px solid #a94442; /* red */
        }

    `]
})
export class HomeContactUsComponent {
    // private strPostUrl: string = "http://localhost:5000/leemtek-secure-forms/us-central1/getredbox/send";
    private strPostUrl: string = "https://us-central1-leemtek-secure-forms.cloudfunctions.net/getredbox/send";
    
    // Details of my visitor.
    objSenderInfo = {
        strName: null,
        strEmail: null,
        strMessage: null,
        googleResponse: null
    }; // objSenderInfo

    constructor(private http: Http) {}

    // Clears form.
    fnClearForm() {

    }

    // Send to REST endpoint.
    mdSend() {
        // Disable submit button and indicate "Please wait...".
        $('#contactUsBtnSubmit').text('Please Wait...');
        $('#contactUsBtnSubmit').removeClass('btn-default').addClass('btn-info');
        $("#contactUsBtnSubmit").prop('disabled', true);

        // Attempt to send email.
        this.mdSendData(this.objSenderInfo)
            .subscribe(data => {
                if (data.status === "email sent") {
                    // Success
                    $('#contactUsBtnSubmit').text('Email Sent. Thanks! :)');
                    $('#contactUsBtnSubmit').removeClass('btn-info').addClass('btn-success');
                    $("#contactUsBtnSubmit").prop('disabled', true);
                } else {
                    // Something went wrong.
                    $('#contactUsBtnSubmit').text('Please try again.');
                    $('#contactUsBtnSubmit').removeClass('btn-info').addClass('btn-danger');
                    $("#contactUsBtnSubmit").prop('disabled', false);
                } // else
            }) // subscribe()
        ; // mdSendData()
    } // mdSend()

    // Handle the captcha response and save to objSenderInfo.captchaResponse
    mdCaptchaHandle(strResponse: string): void {
        this.objSenderInfo.googleResponse = strResponse;
    } // mdCaptchaHandle(response)

    // Handles expired captchas.
    mdCaptchaExpired(): void {
        this.objSenderInfo.googleResponse = null;
    }

    // Send the email to REST API.
    mdSendData(objFinalSenderInfo: any) {
        const strBody = JSON.stringify(objFinalSenderInfo);
        const headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(this.strPostUrl, strBody, { headers: headers })
            .map((data: Response) => data.json())
        ; // this.http.post()
    }
}