import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-portnav',
  templateUrl: './portnav.component.html',
  styleUrls: ['./portnav.component.scss']
})
export class PortnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
