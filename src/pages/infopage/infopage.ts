import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx' ;

@Component({
  selector: 'page-infopage',
  templateUrl: 'infopage.html'
})
export class InfoPage {

    item:any;
    matchCollection: any;
    matchCollectionId: string;
    seasons: any;
    seasonsId: any[] = [];
    leaguesTotal: any;
    leagues: string[] = [];
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    gameweeks: any[] = [];

    constructor(public navCtrl: NavController, public params: NavParams) {
        this.item = this.params.get('item');
        this.matchCollection = this.params.get('matchColl');
        this.seasons = this.params.get('seasons');
        this.leaguesTotal = this.params.get('leagues');
    }

    ionViewDidEnter() {
        this.matchCollectionId = this.item.matchCollectionId;
        for (let i = 0; i < this.matchCollection.length; i++) {
            if (this.matchCollectionId == this.matchCollection[i].id) {
                this.startDate = this.matchCollection[i].startTime.split('T')[0];
                this.startTime = this.matchCollection[i].startTime.split('T')[1].split('.')[0];
                this.endDate = this.matchCollection[i].endTime.split('T')[0];
                this.endTime = this.matchCollection[i].endTime.split('T')[1].split('.')[0];
                this.gameweeks = this.matchCollection[i].gameweeks;
                this.seasonsId = this.matchCollection[i].seasonIds;
            }
        }
        for (let i = 0; i < this.seasonsId.length; i++) {
            for (let j = 0; j < this.seasons.length; j++) {
                if (this.seasonsId[i] == this.seasons[j].id) {
                    for (let k = 0; k < this.leaguesTotal.length; k++) {
                        if (this.seasons[j].leagueId == this.leaguesTotal[k].id) {
                            this.leagues.push(this.leaguesTotal[k].name);
                        }
                    }
                }
            }
        }
    }

  

}
