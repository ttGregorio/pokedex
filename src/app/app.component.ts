import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  showTemplate:boolean = false;

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'es', 'pt']);
  //  translate.setDefaultLang('pt');      
    
  //  const browserLang = translate.getBrowserLang();
    translate.use('pt');
  }

  ngOnInit(){

  }

  showContentWrapper(){
    return {
//      'content-wrapper':this.shared.isLoggedIn()
        'content-wrapper':true
    }
  }
}
