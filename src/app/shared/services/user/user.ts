import { Injectable } from '@angular/core';
import { Storage } from '../../providers/storage/storage';
import { IUser, IUserCreate, IUserLogin } from 'src/app/pages/interfaces/IUser';
import { Uuid } from '../../providers/uuid/uuid';

@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(private readonly storageSrv: Storage, private readonly uuidSrv: Uuid){}

  register(user:IUserCreate):IUser{
    const users = this.storageSrv.get<IUser[]>('users') || []
    const isEmailExist = users.find(u => u.email === user.email);

    if (isEmailExist){
      throw new Error("Email already registered")
    }

    const newUser: IUser = {
      uuid: this.uuidSrv.get(),
      ...user,
      password: btoa(user.password),
    };

    users.push(newUser);
    this.storageSrv.set('users', JSON.stringify(users));
    return newUser;
  }

  login(user:IUserLogin):IUser{
    const users = this.storageSrv.get<IUser[]>('users') || []
    const isLogin = users.find(u => u.email === user.email && atob(u.password) === user.password);

    if (!isLogin){
      throw new Error("User not exist")
    }
    const activeUser: IUser = {
      ...isLogin
    };

    return activeUser;
  }
}
