import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {

    dataSource: BehaviorSubject<string> = new BehaviorSubject('home');
    current: Observable<string> = this.dataSource.asObservable();

    constructor() { }

    update(data: string) {
        this.dataSource.next(data);
    }

}
