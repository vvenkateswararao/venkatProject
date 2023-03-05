import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: any;
  data: any;
  dataChart: any;
  optionsChart: any;
  tableData: any;
  dropDownOptions: any;
  name: any = ''
  constructor(private servcie: ServService) { }

  ngOnInit(): void {
    this.name = this.servcie?.userName;
    this.dropDownOptions = [
      {
        name: 'Completed',
        id: 1
      },
      {
        name: 'Not completed',
        id: 2
      }
    ]
    this.data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Video',
          backgroundColor: '#D3D3D3',
          hoverBackgroundColor: '#1c1e53',
          width: '20px',
          data: [65, 59, 80, 81, 56, 55, 40, 23, 75, 42, 10, 61]
        }
      ]
    };
    this.options = {
      plugins: {
        legend: {
          labels: {
            color: '#000000'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#000000'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#ffffff'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };

    this.dataChart = {
      labels: ['ML', 'AI', 'IOT'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#1c1e53",
            "#D3D3D3",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#1c1e53",
            "#D3D3D3",
            "#FFCE56"
          ]
        }
      ]
    };

    this.optionsChart = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    }

    this.tableData = [
      {
        imgSrc: 'assets/laptop.jpg',
        name: 'Web technologies',
        desc: 'Web related technologies',
        progress: 23,
        status: 'Not Completed'
      },
      {
        imgSrc: 'assets/bgLaptop.jpg',
        name: 'Artifical Intelligance',
        desc: 'Web related technologies',
        progress: 57,
        status: 'Not Completed'
      },
      {
        imgSrc: 'assets/laptop.jpg',
        name: 'Full Stack Development',
        desc: 'Web related technologies',
        progress: 95,
        status: 'Completed'
      },
      {
        imgSrc: 'assets/bgLaptop.jpg',
        name: 'Data Science',
        desc: 'Web related technologies',
        progress: 10,
        status: 'Not Completed'
      },
      {
        imgSrc: 'assets/mainImage.png',
        name: 'Block Chain',
        desc: 'Web related technologies',
        progress: 44,
        status: 'Not Completed'
      }
    ]
  }
}
