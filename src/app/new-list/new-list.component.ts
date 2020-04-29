import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news.service'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
}) 
export class NewListComponent implements OnInit {
  constructor(private newSvc:NewsService) { }
  ngOnInit(): void {
    this.newSvc.getNewsItems().subscribe(response => {
      this.newsItems = response
    },
    error => {
      alert("Sorry. There was a problem getting data.")
    })
  }
  selectedNewsId: number
  newsItems: News[] = []
  
  expandNews(id:number) {
    this.selectedNewsId = id
    return false
  }
}
