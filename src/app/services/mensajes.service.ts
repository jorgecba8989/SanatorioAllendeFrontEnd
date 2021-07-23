import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }


  mensajeGanaste(titulo: string, mensaje: string)
  {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: "success"
    })
  }



  mensajePerdiste(titulo: string, mensaje: string)
  {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: "error"
    })
  }
}
