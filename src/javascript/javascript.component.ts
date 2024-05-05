import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { count } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: "app-javascript",
  templateUrl: "./javascript.component.html",
  styleUrls: ["./javascript.component.scss"],
})
export class JavascriptComponent implements OnInit {
  muldivForm!: FormGroup;
  value: number | undefined;

  filterData: any;
  loggedInPerson: string = "Prakash";

  sampleJson = [
    {id: 1, name : 'Ajinkya', isAdmin: true, age: 30},
    {id: 2, name : 'Prakash', isAdmin: false, age: 28},
    {id: 3, name : 'Surya', isAdmin: true, age:25},
    {id: 4, name : 'Hari', isAdmin: false, age: 28},
  ];

  users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'moderator' }
  ];

  ngOnInit(): void {
    this.getCurrentDayAndTime();
    this.getWindowContent();
    this.getDate();
    this.getAreaOfTriangle();
    this.getLeapyear(2023);
    this.getFormValues();
    this.getTemp(60, 45);
    this.difference(20);
    this.sum(2, 2);
    this.diffTriple(23);
    this.sumOfPair(20, 30);
    this.posNegNum(-2, 4);
    this.concate("aj");
    this.splitText("Ajinkya Rahane,string");
    this.removeSpacesfromstartingandEndingOfString();
    this.eachData();
    this.mapdata();
  }

  constructor(private fb: FormBuilder, private homeService: HomeService) {}

  //   Write a JavaScript program to display the current day and time in the following format.
  // Sample Output : Today is : Tuesday.

  getCurrentDayAndTime() {
    const date = new Date();
    let day = date.toLocaleString("en-us", { weekday: "long" });
    console.log(`Today is : ${day}`);
  }

  getWindowContent() {
    // window.print();
  }

  getDate() {
    let date = new Date();
    // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];

    let mth = month + 1;

    let month1 = mth < 10 ? `0${mth}` : mth;
    let day1 = day < 10 ? `0${day}` : day;

    console.log(`${month1}-${day1}-${year}`);
    console.log(`${month1}/${day1}/${year}`);
    console.log(`${day1}-${month1}-${year}`);
    console.log(`${day1}/${month1}/${year}`);
  }

  getAreaOfTriangle() {
    let a = 5,
      b = 6,
      c = 7;
    let s = (a + b + c) / 2; // s = semiPerimeter
    let areaOfTr = s * (s - a) * (s - b) * (s - c);
    console.log(Math.sqrt(areaOfTr));
  }

  getLeapyear(year: any) {
    console.log(year);
    if (year % 4 === 0 && year % 100 !== 0) {
      console.log("Leap  Year");
    } else {
      console.log("Not Leap Year");
    }
    // let a = ((year % 4 == 0) && (year % 100 != 0));
    // console.log(a)
  }

  getFormValues() {
    this.muldivForm = this.fb.group({
      firstnum: [""],
      secondnum: [""],
    });
  }

  multiply() {
    let firstNum = this.muldivForm.get("firstnum")?.value;
    let secondNum = this.muldivForm.get("secondnum")?.value;

    this.value = firstNum * secondNum;
  }

  dividedBy() {
    let firstNum = this.muldivForm.get("firstnum")?.value;
    let secondNum = this.muldivForm.get("secondnum")?.value;

    this.value = firstNum / secondNum;
  }

  getTemp(c: any, f: any) {
    let celcius = c && (c / 5) * 9 + 32;
    let farht = f && ((f - 32) / 9) * 5;

    console.log(celcius, "celcius");
    console.log(farht, "farht");
  }

  // if the input number 20 - 13 = 7 which is not greaterthan 13 so return the difference if the difference is greaterthan 13 then double it.
  difference(num: any) {
    if (num >= 13) {
      console.log((num - 13) * 2);
    } else {
      console.log(num - 13);
    }
  }

  sum(a: any, b: any) {
    if (a === b) {
      console.log((a + b) * 3);
    } else {
      console.log(a + b);
    }
  }

  diffTriple(num: any) {
    if (num >= 19) {
      console.log((num - 19) * 3);
    } else {
      console.log(num - 19);
    }
  }

  sumOfPair(a: any, b: any) {
    if (a === 50 || b === 50 || a + b === 50) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  posNegNum(a: any, b: any) {
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  concate(text: any) {
    if (text.startsWith("py")) {
      console.log(text);
    } else {
      console.log("py" + text);
    }
  }

  splitText(text: any) {
    console.log(text.split(","));
  }

  removeSpacesfromstartingandEndingOfString() {
    let spampleString = "Ajinkya Rhane";
    console.log(spampleString);
    console.log(spampleString.trim());
  }

  eachData() {
    this.homeService.getCountryData().subscribe((res: any) => {
      this.filterData = res.countries.filter((countryData: any) => {
        return countryData.population > 40000 && countryData.name !== 'Germany';
      })
    });
  }

  mapdata() {
   this.homeService.getCountryData().subscribe((res: any) => {
      res.countries.map((country :any, index: any) => {
        let data = {...country, population: country.population > 20000 ? country.population * 2 : country.population, id: index + 1}
        console.log(data);
      })
    })}
    
    
}

