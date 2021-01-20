import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { PVSer } from '../models/PVSer';
import { TwitchService } from '../twitch.service';

@Component({
  selector: 'app-pvs',
  templateUrl: './pvs-list.component.html',
  styleUrls: ['./pvs-list.component.scss']
})
export class PvsListComponent implements OnInit {
  pvsers: Array<PVSer> = [];
  constructor(private generalService: GeneralService, private twitchService: TwitchService) { }

  async ngOnInit() {
    const data = await this.generalService.getPVSers();

    data.forEach(async (item: string, index: number) => {
      const channel = (await this.twitchService.getChannel(item)).data[0];
      const pvser: PVSer = {
        name: item,
        twitchImageUrl: channel.profile_image_url
      };

      this.pvsers.push(pvser);
    });

    this.pvsers.sort((a, b) => a.name.localeCompare(b.name));
  }
}


