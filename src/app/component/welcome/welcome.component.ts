import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: string;
  name = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorlServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

}
