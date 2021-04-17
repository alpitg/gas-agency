import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggleFlag = true;

  constructor() { };

  ngAfterViewInit() {
    (function ($) {

    })(jQuery);
  }

  ngOnInit() {

  }


}
