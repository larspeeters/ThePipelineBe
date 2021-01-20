import {
  Component
} from '@angular/core';
import {
  fab
} from '@fortawesome/free-brands-svg-icons';
import {
  FaIconLibrary
} from '@fortawesome/angular-fontawesome'; // https://github.com/FortAwesome/angular-fontawesome

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
  }
}
