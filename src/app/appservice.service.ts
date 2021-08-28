import { Injectable } from '@angular/core';

export type User = {
  id: number;
  name: string;
  Country: string;
};

@Injectable()
export class AppserviceService {
  public users: User[] = [{ id: 1, name: "jiiva", Country: "india" }];
  public count = 2;

  public getUser(id:any) {
    const index = this.users.map(x => x.id).indexOf(id);
    if (index != -1) {
      return { ...this.users[index] };
    } else {
      return { id: 0, name: "", Country: "" };
    }
  }

  public addUser(user:any) {
    this.users.push({...user, id: this.count++});
  }

  public updateUser(data:any) {
    const index = this.users.map(x => x.id).indexOf(data.id);
    if (index !== -1) {
      this.users[index] = data;
    }
  }

  public deleteUser(id: number) {
    this.users = this.users.filter(x => x.id !== id);
  }
}
  