import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../twitch.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  projects = 2;
  verifiedStreamers: number;
  pastEvents: number;
  facebookLikes: number;
  instagramFollowers: number;
  twitterFollowers: number;
  discordMembers: number;
  twitchFollowers: number;

  constructor(private twitchService: TwitchService) { }

  ngOnInit() {
    //this.twitchFollowers = this.twitchService.getFollowerAmount('thepipeline_be');
  }

}
