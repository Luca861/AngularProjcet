
export interface IAddress{
  city:string;
  street:string;
  postalCode:string;

}


export interface IUser{
  id:number;
  name:string;
  surname:string;
  age:number;
  dateOfBirth: string;
  address: IAddress;
  role: string;
  username: string;
  profilePhotoUrl: string;
  gender: string;

}
