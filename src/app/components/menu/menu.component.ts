import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(
    public translate: TranslateService) {
   }

  ngOnInit(): void {
  }

  changeLanguage(language:string){
     this.translate.use(language);
   }  
}
