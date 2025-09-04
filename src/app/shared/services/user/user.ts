import { Injectable } from '@angular/core';
import { Storage } from '../../providers/storage/storage';
import { IUser, IUserCreate, IUserLogin } from 'src/app/pages/interfaces/IUser';
import { Uuid } from '../../providers/uuid/uuid';
import { Toast } from '../../providers/toast/toast';
import { Encrypt } from '../../providers/encrypt/encrypt';

@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(private readonly storageSrv: Storage, private readonly uuidSrv: Uuid, private readonly toastPrv:Toast, private readonly encryptPrv: Encrypt){}

  register(user:IUserCreate):IUser{
    const users = this.storageSrv.get<IUser[]>('users') || []
    const isEmailExist = users.find(u => u.email === user.email);

    if (isEmailExist){
      this.toastPrv.presentToast('email already registered');
    }

    const newUser: IUser = {
      uuid: this.uuidSrv.get(),
      ...user,
      password: this.encryptPrv.encode(user.password),
    };

    users.push(newUser);
    this.storageSrv.set('users', JSON.stringify(users));
    return newUser;
  }

  login(user:IUserLogin):IUser | undefined{
    const users = this.storageSrv.get<IUser[]>('users') || []
    const isLogin = users.find(u => u.email === user.email && this.encryptPrv.decode(u.password) === user.password);

    if (!isLogin){
      this.toastPrv.presentToast("User not exist");
      return;
    }
    const activeUser: IUser = {
      ...isLogin
    };
    return activeUser;
  }
}
