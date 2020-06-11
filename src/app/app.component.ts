import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ACSTastAssignment';
  manager = { man: 300 };
  managerInnerValue = { man: 300, dev: 1000, qa: 500 };
  developer = { dev: 1000 };
  qa = { qa: 500 };
  Qa = [];
  Total: number = 0;
  TotalManager: number = 0;
  TotalManagerDept: number = 0;
  showManagersFromDept = false;
  countMan = 0;
  countDev = 0;
  countQa = 0;
  countArrayMan = [];
  countArrayDev = [];
  countArrayQa = [];

  constructor() {}

  ngOnInit() {
  }

  addManager(man?, dev?, qa?) {
    let sum = 0;
    let innerManager = [];
    if (man !== undefined) {
      innerManager.push(this.managerInnerValue.man);
      this.countMan++;
      this.countArrayMan.push(this.countMan);
    }
    if (dev !== undefined) {
      innerManager.push(this.managerInnerValue.dev);
      this.countDev++;
      this.countArrayDev.push({man: this.countMan, dev: this.countDev});
    }
    if (qa !== undefined) {
      innerManager.push(this.managerInnerValue.qa);
      this.countQa++;
      this.countArrayQa.push({man: this.countMan, qa: this.countQa});
    }
    innerManager.forEach((innMan) => {
      sum += innMan;
    });
    this.TotalManagerDept += sum;
    this.CalculateTotal()
  }

  CalculateTotal() {
    this.Total = this.TotalManager + this.TotalManagerDept;
  }

  clearAll() {
    this.countMan = 0;
    this.countDev = 0;
    this.countQa = 0;
    this.countArrayMan = []
    this.countArrayDev = []
    this.countArrayQa = []
    this.TotalManager = 0
    this.TotalManagerDept = 0
    this.Total = 0
  }
}
