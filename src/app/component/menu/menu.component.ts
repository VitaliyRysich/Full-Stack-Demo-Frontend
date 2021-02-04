import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from 'src/app/service/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: HardcodeAuthenticationService) { }

  ngOnInit(): void {
  }

}
