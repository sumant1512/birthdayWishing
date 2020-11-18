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
  @ViewChild("cake_display", { static: false }) cake_display: ElementRef;
  @ViewChild("birthday_message", { static: false })
  birthday_message: ElementRef;
  @ViewChild("burn1", { static: false }) burn1: ElementRef;
  @ViewChild("burn2", { static: false }) burn2: ElementRef;
  @ViewChild("burn3", { static: false }) burn3: ElementRef;
  @ViewChild("burn4", { static: false }) burn4: ElementRef;
  @ViewChild("burn5", { static: false }) burn5: ElementRef;
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
    "Light Candle",
    "Wish Me",
    "Show Message",
  ];
  birthdayMessage = [
    "Today is...",
    "as beautiful as other days",
    "but you realize",
    "another year has gone",
    "in a blink of the eyes",
    "however",
    "Do you know..?",
    "today is just special",
    "so special to you",
    "that's why",
    "Let's make it...",
    "the best celebration ever",
    "and let me share...",
    "a piece of happiness to you",
    "I made all this...",
    "as a birthday present to you",
    "thanks for being there",
    "thanks for the friendship we made",
    "thanks for everything",
    "I wish you all the best",
    "May your life be at ease",
    "May all your wishes come true",
    "Remember",
    "your ambitions",
    "you live as a free bird...",
    "flying in the blue sky",
    "Now things are different...",
    "real story of your life",
    "is just about to begin",
    "indeed..",
    "but...",
    "don't worry",
    "because...",
    "God has your back",
    "and",
    "this year will be better",
    "and I hope",
    "you'll find...",
    "happiness along the way",
    "keep your spirit up",
    "enjoy every single moment...",
    "that you experience today",
    "fill it with your most beautiful smile",
    "and make it the best memory..",
    "lastly...",
    "I'd like to wish you one more time",
    "a very happy birthday to my Love",
    "from Rachit Sethiya (Break up King)",
  ];
  message: string;
  index = 0;
  currentBtnName = this.buttonNameList[this.index];
  collectBallon: boolean;
  isButtonActive = true;
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
        this.bday_song.nativeElement.play();
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
        this.callBallonAnimation();
        break;
      case 4:
        this.cake_display.nativeElement.classList.add("d-block");
        break;
      case 5:
        this.burn1.nativeElement.classList.add("d-block");
        this.burn2.nativeElement.classList.add("d-block");
        this.burn3.nativeElement.classList.add("d-block");
        this.burn4.nativeElement.classList.add("d-block");
        this.burn5.nativeElement.classList.add("d-block");
        break;
      case 6:
        this.collectBallon = true;
        this.callBallonAnimation();
        break;
      case 7:
        this.cake_display.nativeElement.classList.remove("d-block");
        this.burn1.nativeElement.classList.remove("d-block");
        this.burn2.nativeElement.classList.remove("d-block");
        this.burn3.nativeElement.classList.remove("d-block");
        this.burn4.nativeElement.classList.remove("d-block");
        this.burn5.nativeElement.classList.remove("d-block");
        this.birthday_message.nativeElement.classList.add("d-block");
        this.showMessage();
        this.isButtonActive = false;
        break;
    }
    this.index = this.index + 1;
    this.currentBtnName = this.buttonNameList[this.index];
  }

  callBallonAnimation() {
    this.loopOne();
    this.loopTwo();
    this.loopThree();
    this.loopFour();
    this.loopFive();
    this.loopSix();
    this.loopSeven();
  }

  loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    if (this.collectBallon) {
      this.b1.nativeElement.setAttribute(
        "style",
        "left: 67px; bottom: 217px; top:240px"
      );
    } else {
      this.b1.nativeElement.animate(
        [{ left: randleft + "px" }, { bottom: randtop + "px" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }

  loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    if (this.collectBallon) {
      this.b2.nativeElement.setAttribute(
        "style",
        "left: 200px; bottom: 217px; top:240px"
      );
    } else {
      this.b2.nativeElement.animate(
        [{ left: randleft + "px" }, { bottom: randtop + "px" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }

  loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    if (this.collectBallon) {
      this.b3.nativeElement.setAttribute(
        "style",
        "left: 300px; bottom: 217px; top:240px"
      );
    } else {
      this.b3.nativeElement.animate(
        [{ left: randleft + "px" }, { bottom: randtop + "px" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }

  loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    if (this.collectBallon) {
      this.b4.nativeElement.setAttribute(
        "style",
        "left: 400px; bottom: 217px; top:240px"
      );
    } else {
      this.b4.nativeElement.animate(
        [{ left: randleft + "px" }, { bottom: randtop + "px" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }

  loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    if (this.collectBallon) {
      this.b5.nativeElement.setAttribute(
        "style",
        "left: 500px; bottom: 217px; top:240px"
      );
    } else {
      this.b5.nativeElement.animate(
        [{ left: randleft + "px" }, { bottom: randtop + "px" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }

  loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    if (this.collectBallon) {
      this.b6.nativeElement.setAttribute(
        "style",
        "left: 600px; bottom: 217px; top:240px"
      );
    } else {
      this.b6.nativeElement.animate(
        [{ left: randleft + "px" }, { bottom: randtop + "px" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }

  loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    if (this.collectBallon) {
      this.b7.nativeElement.setAttribute(
        "style",
        "left: 700px; bottom: 217px; top:240px"
      );
    } else {
      this.b7.nativeElement.animate(
        [{ left: randleft + "px" }, { bottom: randtop + "px" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }

  showMessage() {
    (async () => {
      for (let item of this.birthdayMessage) {
        await this.timeout(3000);
        this.message = item;
        console.log("waited: " + item);
      }
    })();
  }

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
