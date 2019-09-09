import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  constructor(readonly activateRoute: ActivatedRoute,
    readonly router: Router) { }

  ngOnInit() {
  }

  onSearchByName(name: string) {
    console.info('Seached Name:', name)
    this.router.navigate(['/boardgames/name', name]);
  }

  onSearchByCategory(category: string) {
    console.info('Seached Category:', category)
    this.router.navigate(['/boardgames/category', category]);
  }

}
