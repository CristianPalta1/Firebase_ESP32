import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { faCoffee, faSuitcase, faShoppingCart, faPhoneVolume, faHandshake, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt, faUserLock, faCopyright, faVideo, faMale, faUserSecret, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUserEdit, faMicrochip, faAward, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faRobot, faRocket, faWifi, faHouseDamage, faHotel } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ChatsInfo } from '../interfaces/chatbox';
import { ChatServices } from '../services/chat.service';
import { AuthemticationService } from '../services/authemtication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [routerTransition()]
})
export class InicioComponent implements OnInit {
  title = 'SegCauca';
  action: any = 'oculto';
  chat = 'visible';
  empezar: any  = 'visible';
  iniciochat = 'oculto';
  submenu2 = 'oculto';
  submenu3 = 'oculto';
  conversas: ChatsInfo[];
  conversa: ChatsInfo = {
    id: '',
    // nombre: '',
    // idcomentario: '',
    // cedula: '',
    comentario: '',
    comentarioMon: '',
    // usuarioMon: ''
  };

  public idChat = '';
  public contador = -1;
  public pushRightClass: string;
  faCoffee = faCoffee; faUserLock = faUserLock;
  faShieldAlt = faShieldAlt;
  faComments = faComments; faAward = faAward;
  faCommentAlt = faCommentAlt; faMicrochip = faMicrochip;
  faAngleDoubleRight = faAngleDoubleRight; faUserEdit = faUserEdit;
  faHome = faHome; faMale = faMale;
  faSuitcase = faSuitcase; faUserSecret = faUserSecret;
  faShoppingCart = faShoppingCart;
  faPhoneVolume = faPhoneVolume; faUserShield = faUserShield;
  faHotel = faHotel; faHandshake = faHandshake; faWifi = faWifi;
  faCopyright = faCopyright;
  faTools = faTools; faClipboardList = faClipboardList;
  faVideo = faVideo; faRocket = faRocket; faHouseDamage = faHouseDamage;
  faRobot = faRobot;
  faPhoneSquare = faPhoneSquare;
  faUserFriends = faUserFriends;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  public sliders: Array<any> = [];
  ChatServices: any;
  constructor(private chatsService: ChatServices) {

    this.chatsService.getChat().subscribe((infoChat: ChatsInfo[]) => {
      console.log('Info Chat:', infoChat);
      this.conversas = infoChat;
    }, (error)  => {
        console.log(error, 'hubo un error');
    });

    this.sliders.push(
      {
        imagePath: '../../assets/images/carrousel1.jpeg',
        label: '',
        text: ''
      },
      {
        imagePath: '../../assets/images/carrousel3.jpeg',
        label: '',
        text: ''
      },
      {
        imagePath: '../../assets/images/carrousel5.jpeg',
        label: '',
        text: ''
      },
      {
        imagePath: '../../assets/images/carrousel2.jpeg',
        label: '',
        text: ''
      }
    );
  }
  ngOnInit() {}
  guardarChat2() {
    // como se realizo el servicio que crea un arreglo de cualquier cosa para el bus. entonces
    // this.busRegistro.id = Date.now(); sirve para generar un id de diamesañoshorasegundo
    this.empezar = 'oculto';
    this.chat = 'oculto';
    this.iniciochat = 'visible';
    // this.conversa.id = conversa.cedula;
    this.conversa.id = Date.now();
    this.chatsService.guardarChat2(this.conversa);
    // En buses.service. ts declare un servicio que tiene el mismo nombre de busRegistro. Entonces desde el service imprime en consola
    // alert('Tu solicitud a sido registrada');
    this.conversa = {};
  }
  goToChat() {
    this.chatsService.getChat().subscribe((infoChat: ChatsInfo[]) => {
      console.log('Info Chat:', infoChat);
      this.conversas = infoChat;
      this.contador = this.conversas.length;
      this.idChat = this.conversas[0].id;
      console.log('idChat', this.idChat, 'contado', this.contador);
    });

  }
  cerrar() {
    this.action = 'oculto';
    localStorage.clear();
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }
}
