import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  counts: any = [];
  cards: any = [];
  ngOnInit(): void {
    this.counts = [
      {
        header: '21.0000+',
        desc: 'Siswa teradata'
      },
      {
        header: '100+',
        desc: 'Teradata'
      },
      {
        header: '150+',
        desc: 'PostgreData'
      }
    ]
    this.cards = [
      {
        id: '1',
        title: 'Course1',
        desc: 'Detailed course with hands on and questions designed by industry experts.'
      },
      {
        id: '2',
        title: 'Course2',
        desc: 'Detailed course with hands on and questions designed by industry experts.'
      },
      {
        id: '3',
        title: 'Course3',
        desc: 'Detailed course with hands on and questions designed by industry experts.'
      },
      {
        id: '4',
        title: 'Course4',
        desc: 'Detailed course with hands on and questions designed by industry experts.'
      },
      {
        id: '5',
        title: 'Course5',
        desc: 'Detailed course with hands on and questions designed by industry experts.'
      },
      {
        id: '6',
        title: 'Course6',
        desc: 'Detailed course with hands on and questions designed by industry experts.'
      }
    ]
  }
}
