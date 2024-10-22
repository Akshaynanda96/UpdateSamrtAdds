import { Component } from '@angular/core';
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CustomerDetailsComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
