import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { StatModule } from '../shared';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

library.add(faCoffee);

@NgModule({
    imports: [
        CommonModule,
        InicioRoutingModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule,
        FormsModule,
        FontAwesomeModule
    ],
    declarations: [InicioComponent]
})
export class InicioModule {}
