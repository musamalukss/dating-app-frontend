import { Photo } from "./photo";

export interface  Member {
    id: number;
    username: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    interests: string;
    lookingFor: string;
    country: string;
    city: string;
    photoUrl: string;
    introduction:string;
    photos: Photo[];
  }
  
 