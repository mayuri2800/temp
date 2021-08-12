import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
DataService
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  letter = '';
  name = '';

  fru: any = [{letter: 'A', name: "Apple"},
  {letter: 'B', name: "Banana"},
  {letter: 'C', name: "Cheery"}];

  search() {
    
    let result = this.fru.find((s:any) => s.letter == this.letter);
    console.log(result);
    console.log("hello");
}
  
  
  constructor(private dataService:DataService) {  
  }
  users:any = [];
  ngOnInit(): void {
  this.dataService.getUser().subscribe((data:any)=>{
    console.log(data);
    this.users = data;
    
  })
  }

}
