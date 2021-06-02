import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.css']
})
export class FootballClubComponent implements OnInit {

  constructor(private http: HttpClient) { }
  model: SendData = {
    date: ''
  };
  clicked = false;
  fbClubs: any;
  mthData: any;
  mthData2: any;
  isButtonVisible = false;
  ptsClicked = false;
  glsClicked = false;
  winsClicked = false;
  searchDate: any;
  noSearch: any;

/*Getting premier league table point sorted values from the backend server website*/
  pointsSort(): void{
    const response8 = this.http.get('http://localhost:8080/footballClub/sortByPoints');
    response8.subscribe((data) => this.fbClubs = data);
  }

  /*Getting premier league table goals sorted values from the backend server website*/
  goalsSort(): void{
    const response2 = this.http.get('http://localhost:8080/footballClub/sortedByGoals');
    response2.subscribe((data) => this.fbClubs = data);
  }

  /*Getting premier league table wins sorted values from the backend server website*/
  winsSort(): void{
    const response3 = this.http.get('http://localhost:8080/footballClub/sortByWins');
    response3.subscribe((data) => this.fbClubs = data);
  }

  /*Getting random match data from the backend server website*/
  randomMatch(): void{

    const response5 = this.http.get('http://localhost:8080/footballClub/randomMatch');
    response5.subscribe((data) => this.mthData = data);

    const response6 = this.http.get('http://localhost:8080/footballClub/sortByPoints');
    response6.subscribe((data) => this.fbClubs = data);

    this.pointsSort();
  }

  /*Sending date value to backend server and receiving match details to the searched date*/
   sendDateValue(): void {
     if (this.model.date.length < 10 || this.model.date.length > 10  || !this.model.date.includes('-')) {
       alert('Please input a valid date to search. Date format must be in yyyy-MM-dd');
     } else {
       this.http.post<any>('http://localhost:8080/footballClub/date', this.model.date).subscribe(data => {
         this.model.date = data;
         const response7 = this.http.get('http://localhost:8080/footballClub/searchDate');
         response7.subscribe((data2) => this.searchDate = data2);
         const response8 = this.http.get('http://localhost:8080/footballClub/noSearchFound');
         response8.subscribe((data3) => this.noSearch = data3);
       });
     }
   }


  ngOnInit(): void {
      const response = this.http.get('http://localhost:8080/footballClub/sortByPoints');
      response.subscribe((data) => this.fbClubs = data);
      this.ptsClicked = true;
  }
}

export interface SendData {
  date: string;
}


