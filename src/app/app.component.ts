import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: any;
  title: 'Accordion in Angular';

  searchTerm: string;
  selectedParent: number;
  isSelectedParent: boolean = false;

  MyData: any[] = [];
  filterData: any[] = [];

  constructor(public ts: TestService) {}
  ngOnInit(): void {
    //  getting the data from url
    this.ts.getData().subscribe(
      (data) => {
        this.MyData = data;
        this.filterData = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }
  pageChanged(event) {
    this.selectedParent = -1;
    this.isSelectedParent = false;
    this.config.currentPage = event;
  }
}
