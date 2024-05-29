import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.scss']
})
export class ClientDataComponent implements OnInit {
  @Input() data: any;

  public childData: string = "data from child component";

  public childDataUsingViewchild = [
    {id: 1, name: "kjhecbfnajhbi", address: "ekjhcfbihwbe"}
  ]
  response: any;
  
  constructor(private homeService: HomeService) {}
  
  ngOnInit(): void {
    this.homeService.data$.subscribe((res: any) => {
      this.response = res;
    })
  }


}
