import { Component, OnInit } from '@angular/core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'; // https://github.com/FortAwesome/angular-fontawesome
import { GoogleDocsService } from '../google-docs.service';
import { StaffMember } from '../models/StaffMember';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  staffMembers: Array<StaffMember> = [];
  urlTemplate = 'background-image: url(assets/images/staff/{0})}';

  constructor(library: FaIconLibrary, private googleDocsService: GoogleDocsService) {
    library.addIconPacks(fab);
    library.addIconPacks(fas);
    library.addIcons(faGlobe);
  }

  ngOnInit() {
    this.googleDocsService.getSheet().subscribe((response: any) => {
      const entries = response.feed.entry;

      entries.forEach((item: any, index: number) => {
        this.staffMembers.push({
          name: item.gsx$name.$t,
          role: item.gsx$title.$t,
          imageUrl: item.gsx$foto.$t === '' ? 'assets/images/staff/default.jpg' : 'https://drive.google.com/uc?export=view&id=' + item.gsx$foto.$t,
          twitter: item.gsx$twitter.$t,
          instagram: item.gsx$instagram.$t,
          email: item.gsx$email.$t,
          twitch: item.gsx$twitch.$t,
          website: item.gsx$website.$t,
          facebook: item.gsx$facebook.$t,
          linkedin: item.gsx$linkedin.$t
        });
      });
    });
  }

}
