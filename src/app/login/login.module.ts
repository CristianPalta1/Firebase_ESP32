import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StatModule } from '../shared';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule,
        FormsModule,
        FontAwesomeModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}


