import { Component, OnInit } from '@angular/core';
import {
  FaIconLibrary
} from '@fortawesome/angular-fontawesome'; // https://github.com/FortAwesome/angular-fontawesome
import {
  fab
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
