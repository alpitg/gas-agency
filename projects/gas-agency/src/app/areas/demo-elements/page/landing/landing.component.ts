import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngAfterViewInit() {
    (function ($) {
      var o = $(".card-3d");
      $("#top").on("mousemove", function (t) {
        console.log($(window).innerWidth());

        var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
          n = ($(window).innerHeight() / 2 - t.pageY) / 10;
        o.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
      })
    })(jQuery);
  }

  ngOnInit(): void {
  }

}
