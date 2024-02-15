import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  images: string[] = [
    'https://cdn.dribbble.com/users/2417352/screenshots/15827526/media/b92638db32c8342e2c20dbeaa5dec11e.png?resize=1000x750&vertical=center',
    'https://cdn.dribbble.com/users/2394977/screenshots/14668505/media/b672c5b9b5111490dd5589a4426fb28a.jpg?resize=1000x750&vertical=center',
    'https://cdn.dribbble.com/users/1303437/screenshots/14235047/media/24807b9ba350b3ac3e0d6e15903f2c58.png?resize=1000x750&vertical=center',
  ];
}
