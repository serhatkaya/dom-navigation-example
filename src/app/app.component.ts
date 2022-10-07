import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  DomNavigator,
  DomNavigatorElement,
  DomNavigatorMode,
} from 'ngx-dom-navigator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dom-navigation-example';
  codes: number[] = [];
  selected: number = -1;
  /**
   *
   */
  constructor(@Inject(DOCUMENT) private doc: Document) {}
  ngOnInit() {
    for (let index = 0; index < 52; index++) {
      this.codes.push(index);
    }
    this.initNavigator();
  }

  initNavigator() {
    let container = this.doc.querySelector('#container') as DomNavigatorElement;

    const navigator = new DomNavigator(container, {
      mode: DomNavigatorMode.auto,
      selectedClassName: 'selected',
    });
  }
}
