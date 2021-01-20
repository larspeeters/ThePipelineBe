import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  
  constructor(private titleService: Title, private metaService: Meta) {}

   ngOnInit() {
    this.metaService.updateTag(
      {property: 'og:url', content: 'https://thepipeline.be/calendar'}
      );
    this.metaService.updateTag(
      {property: 'og:title', content: 'The Pipeline - Game & Geek Calendar'}
      );
    this.metaService.updateTag(
      {property: 'og:image', content: 'assets/images/cover.png'}
      );
    this.metaService.updateTag(
      {property: 'og:description', content: 'Every gaming or geek-related event, organised in the Benelux.'}
      );
      
  }

  ClipBoard(event)
{
  const el = document.createElement('textarea');
  el.value = event.target.innerHTML;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

}
