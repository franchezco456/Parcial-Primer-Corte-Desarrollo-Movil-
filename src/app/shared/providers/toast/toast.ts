import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class Toast {

  constructor(private toastController: ToastController){}
  
  async presentToast(text:string){
      const toast = await this.toastController.create({
        message: text,
        duration: 2000
      })
      toast.present();
      
  }


  
}
