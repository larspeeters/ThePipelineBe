import { Component, OnInit } from '@angular/core';
import {
  fab
} from '@fortawesome/free-brands-svg-icons';
import {
  fas
} from '@fortawesome/free-solid-svg-icons';
import {
  FaIconLibrary
} from '@fortawesome/angular-fontawesome'; // https://github.com/FortAwesome/angular-fontawesome
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textSwitcher = ['Gives content creators and influencers a boost.',
  'Connects developers to content creators.',
  'Hooks events up with content creators.',
  'Organises events.',
  'Enjoys having a good time playing and talking about games.'];
textCounter = 0;
currentSwitch = this.textSwitcher[this.textCounter];
  constructor(library: FaIconLibrary, private metaService: Meta) { 
    library.addIconPacks(fab);
    library.addIconPacks(fas);
  }

  ngOnInit(): void {

      this.metaService.updateTag(
        {property: 'og:url', content: 'https://www.thepipeline.be/'}
        );
      this.metaService.updateTag(
        {property: 'og:title', content: 'The Pipeline - Boosting social gaming'}
        );
      this.metaService.updateTag(
        {property: 'og:image', content: 'assets/images/cover.png'}
        );
      this.metaService.updateTag(
        {property: 'og:description', content: 'We are a gaming community that strongly believes in the social power games can have as a medium.'}
        );
        
    setInterval(() => {
      if (this.textCounter >= this.textSwitcher.length - 1) {
        this.textCounter = 0;
      } else {
        this.textCounter++;
      }
      this.currentSwitch = this.textSwitcher[this.textCounter];
    }, 5000);
  }

  
}