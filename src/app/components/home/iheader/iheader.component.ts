import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iheader',
  templateUrl: './iheader.component.html',
  styleUrls: ['./iheader.component.scss'],
  animations: [
    trigger('memuStatus',[
      state('on',style({
        opacity: '0',
        transform: 'scale(0.3)'
      })),
      state('off',style({
        opacity: '1',
         transform: 'scale(1)'
      })),
      transition('off => on', animate('300ms ease-in')),
      transition('on => off', animate('300ms ease-out'))
    ])
  ]
})
export class IheaderComponent implements OnInit {

  status:string = 'on';

  constructor( public router: Router ) { }

  toggleStatus(){
    this.status = (this.status==="on")?'off':'on';
    
  }

  exit(){
    localStorage.clear();
    this.router.navigate(['login/signup']);
  }

  ngOnInit() {
  }

}
