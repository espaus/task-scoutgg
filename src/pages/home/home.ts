import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { InfoPage } from "../infopage/infopage";
import 'rxjs/Rx' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url:string = "https://ws.fanteam.com/match_collections?sport=football&tab=admin_created&statuses[]=waiting&page=0&per_page=30&bearer[white_label]=fanteam";
  items: any;
  matchCollection: any;
  seasons: any;
  leagues: any;

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidEnter() {
    this.http.get(this.url).map( res => res.json()).subscribe( res => {
      this.items = res.tournaments;
      this.matchCollection = res.matchCollections;
      this.seasons = res.seasons;
      this.leagues = res.leagues});


  }

  goToInfoPage(item: any) {
    this.navCtrl.push(InfoPage, { item: item, matchColl: this.matchCollection, seasons: this.seasons, leagues: this.leagues });
  }

}
