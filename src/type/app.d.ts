export interface IRegister {
   username: string;
   password: string;
   email: string;
   fullname: string;
}

export enum EStatus {
   SUCCESS = "SUCCESS",
   FAILED = "FAILED",
}
