import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-wish-page",
  templateUrl: "./wish-page.component.html",
  styleUrls: ["./wish-page.component.scss"],
})
export class WishPageComponent implements OnInit {
  @ViewChild("bulb_yellow", { static: false }) bulb_yellow: ElementRef;
  @ViewChild("bulb_red", { static: false }) bulb_red: ElementRef;
  @ViewChild("bulb_blue", { static: false }) bulb_blue: ElementRef;
  @ViewChild("bulb_green", { static: false }) bulb_green: ElementRef;
  @ViewChild("bulb_pink", { static: false }) bulb_pink: ElementRef;
  @ViewChild("bulb_orange", { static: false }) bulb_orange: ElementRef;
  @ViewChild("birthday_banner", { static: false }) birthday_banner: ElementRef;
  @ViewChild("balloon_border", { static: false }) balloon_border: ElementRef;
  @ViewChild("full_body", { static: false }) full_body: ElementRef;
  @ViewChild("bday_song") bday_song: ElementRef;
  @ViewChild("test", { static: false }) test: ElementRef;
  @ViewChild("b1", { static: false }) b1: ElementRef;
  @ViewChild("b2", { static: false }) b2: ElementRef;
  @ViewChild("b3", { static: false }) b3: ElementRef;
  @ViewChild("b4", { static: false }) b4: ElementRef;
  @ViewChild("b5", { static: false }) b5: ElementRef;
  @ViewChild("b6", { static: false }) b6: ElementRef;
  @ViewChild("b7", { static: false }) b7: ElementRef;
  buttonNameList = [
    "Lights On",
    "Play Music",
    "Let's Decorate",
    "Fly With Ballons",
    "Show Delicious Cake",
  ];
  index = 0;
  currentBtnName = this.buttonNameList[this.index];
  constructor() {}

  ngOnInit(): void {}

  // testing here
  changeName() {
    switch (this.index) {
      case 0:
        this.full_body.nativeElement.classList.add("on-light");
        this.bulb_yellow.nativeElement.classList.add("bulb-glow-yellow");
        this.bulb_red.nativeElement.classList.add("bulb-glow-red");
        this.bulb_blue.nativeElement.classList.add("bulb-glow-blue");
        this.bulb_green.nativeElement.classList.add("bulb-glow-green");
        this.bulb_pink.nativeElement.classList.add("bulb-glow-pink");
        this.bulb_orange.nativeElement.classList.add("bulb-glow-orange");
        break;
      case 1:
        // this.bday_song.nativeElement.play();
        this.bulb_yellow.nativeElement.classList.add("bulb-glow-yellow-after");
        this.bulb_red.nativeElement.classList.add("bulb-glow-red-after");
        this.bulb_blue.nativeElement.classList.add("bulb-glow-blue-after");
        this.bulb_green.nativeElement.classList.add("bulb-glow-green-after");
        this.bulb_pink.nativeElement.classList.add("bulb-glow-pink-after");
        this.bulb_orange.nativeElement.classList.add("bulb-glow-orange-after");
        break;
      case 2:
        this.birthday_banner.nativeElement.classList.add(
          "birthday-banner-come"
        );
        break;
      case 3:
        this.balloon_border.nativeElement.animate({ top: -500 + "px" }, 8000);
        this.b1.nativeElement.classList.add("balloons-rotate-behaviour-one");
        this.b2.nativeElement.classList.add("balloons-rotate-behaviour-two");
        this.b3.nativeElement.classList.add("balloons-rotate-behaviour-two");
        this.b4.nativeElement.classList.add("balloons-rotate-behaviour-one");
        this.b5.nativeElement.classList.add("balloons-rotate-behaviour-one");
        this.b6.nativeElement.classList.add("balloons-rotate-behaviour-two");
        this.b7.nativeElement.classList.add("balloons-rotate-behaviour-one");
        this.loopOne();
        this.loopTwo();
        this.loopThree();
        this.loopFour();
        this.loopFive();
        this.loopSix();
        this.loopSeven();
        break;
      case 4:
        this.test.nativeElement.classList.add("slow");
        // this.birthday_banner.nativeElement.classList.add(
        //   'birthday-banner-come'
        // );
        break;
    }
    this.index = this.index + 1;
    if (this.index === this.buttonNameList.length) {
      this.index = 0;
    }
    this.currentBtnName = this.buttonNameList[this.index];
  }

  loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    this.b1.nativeElement.animate(
      [{ left: randleft + "px" }, { bottom: randtop + "px" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
  }

  loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    this.b2.nativeElement.animate(
      [{ left: randleft + "px" }, { bottom: randtop + "px" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
  }

  loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    this.b3.nativeElement.animate(
      [{ left: randleft + "px" }, { bottom: randtop + "px" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
  }

  loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    this.b4.nativeElement.animate(
      [{ left: randleft + "px" }, { bottom: randtop + "px" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
  }

  loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    this.b5.nativeElement.animate(
      [{ left: randleft + "px" }, { bottom: randtop + "px" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
  }

  loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    this.b6.nativeElement.animate(
      [{ left: randleft + "px" }, { bottom: randtop + "px" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
  }

  loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    this.b7.nativeElement.animate(
      [{ left: randleft + "px" }, { bottom: randtop + "px" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
  }
}
