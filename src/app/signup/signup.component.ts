import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { routerTransition } from '../router.animations';
// import { TranslateService } from '@ngx-translate/core';
import { Usuarios } from '../interfaces/usuarios';
import { RegistroServices } from '../services/registro.service';
import { Router } from '@angular/router';
import { AuthemticationService } from '../services/authemtication.service';
// import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})

export class SignupComponent implements OnInit {
  // @ViewChild('f') lForm: NgForm;
    personasRegistro: Usuarios[];
    personaRegistro: Usuarios = {
        id: '',
        name: '',
        lastname: '',
        adress: '',
        phone: '',
        city: '',
        state: '',
        email: '',
        pass: '',
        passC: ''
      };
      registro: Usuarios[];

      ngOnInit() {}
      // tslint:disable-next-line:member-ordering
      public email = '';
      // tslint:disable-next-line:member-ordering
      public pass = '';
      constructor(private registrosService: RegistroServices, private router: Router,
        private authService: AuthemticationService, private ngZone: NgZone) {

        this.registrosService.getUsuarios().subscribe( (data: Usuarios[]) => {
        this.personasRegistro = data;
        // this.email = this.personaRegistro.email;
        // const ContadorUsario = this.personasRegistro.length;
        // console.log(data );
        }, ( error ) => {
          console.log('hubo un error');
          console.log(error);
        });
      }
      guardarUsuario() {
        // como se realizo el servicio que crea un arreglo de cualquier cosa para el bus. entonces
        // this.busRegistro.id = Date.now(); sirve para generar un id de diamesañoshorasegundo
        this.personaRegistro.id = Date.now();
        this.registrosService.guardarUsuario(this.personaRegistro);
        // // this.registrosService.guardarUsuario(this.personaRegistro).subscribe( (data: Usuarios) => {
        // //   console.log(data);
        // //   this.personasRegistro.push(data);
        // // }, (error) => {
        // //   console.log(error);
        // // });
        // En registro.service. ts declare un servicio que tiene el mismo nombre de busRegistro.
        // Entonces desde el service imprime en consola
        alert('Te has registrado con exito');
        this.personaRegistro = {};
        // this.email = this.personaRegistro.email;
        // this.pass = this.personaRegistro.pass;
        this.onAddUser();
      }
    //   solicitarUsuario() {
    //     let nombre = '';

    //     this.registrosService.getUsuarios().subscribe( (infoUsuario: Usuarios[]) => {
    //     console.log(infoUsuario);
    //     this.registro = infoUsuario;
    //     nombre = this.personaRegistro.name;
    //     console.log( this.registro);
    //    }, ( error ) => {
    //      console.log('hubo un error');
    //  }); }
    onAddUser() {
      this.registrosService.getUsuarios().subscribe( (infoUsuario: Usuarios[]) => {
        // console.log(infoUsuario);
        this.registro = infoUsuario;
        const ContadorUsario = this.registro.length;
        this.email = this.registro[ContadorUsario - 1].email;
        this.pass = this.registro[ContadorUsario - 1].pass;
        this.authService.registroUser(this.email, this.pass)
         .then((res) => {
           console.log('response', res);
           this.ngZone.run(() => this.router.navigate(['/login'])).then();
         }).catch(err => console.log('err', err.message));
        // console.log( this.registro, 'email:', this.email, 'pass:', this.pass);
       }, ( error ) => {
         console.log('hubo un error', error);
     });
    }

}
