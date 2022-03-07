export interface User{
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  photo?:string;
}

export interface UserTreeItem extends User{
  children:UserTreeItem[];
}
