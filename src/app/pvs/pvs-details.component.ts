import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PVSer } from '../models/PVSer';
import { TwitchService } from '../twitch.service';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-pvs-details',
  templateUrl: './pvs-details.component.html',
  styleUrls: ['./pvs-details.component.scss']
})
export class PvsDetailsComponent implements OnInit, OnDestroy {
  paramsSub: any;
  pvser: PVSer;

  queryName: string;
  constructor(private activatedRoute: ActivatedRoute,
    private twitchService: TwitchService,
    private router: Router,
    private generalService: GeneralService) { }

  async ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      this.pvser = {
        name: '',
        followerCount: 0,
        viewCount: 0,
        broadcasterType: '',
        twitchImageUrl: ''
      };

      this.queryName = params.name;
    });

    const channels = await this.generalService.getPVSers();
    if (channels.includes(this.queryName)) {
      const channel = (await this.twitchService.getChannel(this.queryName)).data[0];
      const followers = await this.twitchService.getFollowers(channel.id);
      this.pvser.name = channel.login;
      this.pvser.broadcasterType = channel.broadcaster_type;
      this.pvser.viewCount = channel.view_count;
      this.pvser.twitchImageUrl = channel.profile_image_url;
      this.pvser.followerCount = followers.total;
    } else {
      this.router.navigate(['/pvs']);
    }


  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
