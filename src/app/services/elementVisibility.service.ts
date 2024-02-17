import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElementVisibilityService {
  private intersectionObserver: IntersectionObserver;
  private eleVisSub = new Subject<boolean>();

  constructor() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? this.eleVisSub.next(true)
          : this.eleVisSub.next(false);
      });
    });
  }

  // Observable to subscribe to element visibility changes
  elementVisibility: Observable<boolean> = this.eleVisSub.asObservable();

  // Function to observe an element's visibility
  observeElementVisibility(element: HTMLElement): void {
    this.intersectionObserver.observe(element);
  }
  // Function to disconnect the IntersectionObserver
  disconnectObserver(): void {
    this.intersectionObserver.disconnect();
  }
}
