import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
    msg : string = "";    
    constructor(public navCtrl: NavController) {}  
    public logFeedback(){
        console.log(this.msg);
    }
}
