import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit{

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['up'])
  }

}
