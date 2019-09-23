import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';

import { faCoffee, faSuitcase, faShoppingCart, faPhoneVolume, faHotel, faHandshake, faTools } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt, faUserLock, faCopyright, faVideo, faMale, faUserSecret, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUserEdit, faMicrochip, faAward } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthemticationService } from '../services/authemtication.service';
// import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faUserFriends = faUserFriends;
  faPhoneSquare = faPhoneSquare;
    faCoffee = faCoffee; faUserLock = faUserLock;
  faShieldAlt = faShieldAlt;
  faComments = faComments; faAward = faAward;
  faCommentAlt = faCommentAlt; faMicrochip = faMicrochip;
  faAngleDoubleRight = faAngleDoubleRight; faUserEdit = faUserEdit;
  faHome = faHome; faMale = faMale;
  faSuitcase = faSuitcase; faUserSecret = faUserSecret;
  faShoppingCart = faShoppingCart;
  faPhoneVolume = faPhoneVolume; faUserShield = faUserShield;
  faHotel = faHotel; faHandshake = faHandshake;
  faCopyright = faCopyright;
  faTools = faTools;
  faVideo = faVideo;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
    submenu2 = 'oculto';
    submenu3 = 'oculto';
    constructor ( private authService: AuthemticationService, private router: Router, private ngZone: NgZone ) {}
    public email = '';
    // tslint:disable-next-line:no-inferrable-types
    public pass: string = '';
    mostrar2() {
        this.submenu2 = 'visible';
        this.submenu3 = 'oculto';
    }
    mostrar3() {
        this.submenu2 = 'oculto';
        this.submenu3 = 'visible';
    }
    ngOnInit() {}

    loginEmailUser() {
      console.log('email', this.email);
      console.log('password', this.pass);
      this.authService.loginEmailUser(this.email, this.pass)
         .then((res) => {
           console.log(res);
           this.router.navigate(['/layout/dashboard']);
          //  console.log(res, 'Logeado');
      }).catch(err => console.log('err', err.message));
    }

    logoutUser() {
      this.authService.logoutUser();
    }

    loginFacebook(): void {
      this.authService.loginFacebook().then((data) => {
        // console.log(data);
        if ( data.operationType === 'signIn') {
          this.ngZone.run(() => this.router.navigate(['/layout/dashboard'])).then();
          // this.router.navigate(['/layout/dashboard']);
        }
      }).catch((err) => {
        console.log(err);
      });
    }

    loginGoogle() {
      this.authService.loginGoogle().then((data) => {
        // console.log(data);
        if ( data.operationType === 'signIn') {
          this.ngZone.run(() => this.router.navigate(['/layout/dashboard'])).then();
          // this.router.navigate(['/layout/dashboard']);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
