///<reference types="alertify" />
import { Injectable } from '@angular/core';
import { Predicate } from '../interfaces'
 
// declare var alertify: any;
 
@Injectable()
export class NotificationService {
    //private _notifier: any;
 
    constructor() {     }
 
    /*
    Opens a confirmation dialog using the alertify.js lib
    */
    openConfirmationDialog(message: string, okCallback: () => any) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            } else {
            }
        });
    }
 
    /*
    Prints a success message using the alertify.js lib
    */
    printSuccessMessage(message: string) {
 
        alertify.success(message);
    }
 
    /*
    Prints an error message using the alertify.js lib
    */
    printErrorMessage(message: string) {
        alertify.error(message);
    }
}