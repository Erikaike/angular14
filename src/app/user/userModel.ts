export class User {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public address: {
       street: string,
       postCode: string,
       city: string,
    }
    
  ) {}
  
}