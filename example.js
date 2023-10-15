/*
import {Observable, Observer} from "rxjs";
const obs = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
});

const observer = {
    next: val => console.log('next', val),
    error: error => console.log('error', error),
    complete: () => console.log('complete')
}
obs.subscribe(observer);
*/


import {Observable} from "rxjs";

const observable = new Observable(subscriber => {
   subscriber.next('Hello');
   subscriber.next('World');
   subscriber.complete();
});

const observer = {
    value: val => console.log('value', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
}

observable.subscribe(observer);
