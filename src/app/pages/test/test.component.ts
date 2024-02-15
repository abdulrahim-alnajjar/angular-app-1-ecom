import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
})
export class TestComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // console.log(this.activeRoute.snapshot.paramMap.get('name'));
    this.activeRoute.queryParams.subscribe((x) => {
      console.log(x);
    });
  }
}
