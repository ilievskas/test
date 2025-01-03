import { Component, Input } from '@angular/core';
import {driver} from '../../driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {

  @Input()
  vozac: driver | undefined;


  @Input()
  indeks: number | undefined;

  onDrvView(){
    let link: string | undefined;

    if(this.vozac?.iconUrl){
      link=this.vozac?.iconUrl;
    }else{
      link="https://www.google.com"
    }
    window.open(link, "_blank")
  }

  

}
