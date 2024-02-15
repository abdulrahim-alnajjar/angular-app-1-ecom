import { Component } from '@angular/core';
import { Vars } from '../../services/vars.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  logo: string = new Vars().logo;
}
