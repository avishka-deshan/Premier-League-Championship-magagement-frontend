import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-match-data',
  templateUrl: './match-data.component.html',
  styleUrls: ['./match-data.component.css']
})
export class MatchDataComponent implements OnInit {

  mthData: any;

  constructor(private http: HttpClient) { }

  /*getting match data from backend server website*/
  ngOnInit(): void {
    if (this.mthData == null){
      const response = this.http.get('http://localhost:8080/footballClub/sortedByDate');
      response.subscribe((data) => this.mthData = data);
    }
    return this.mthData;
  }

}
