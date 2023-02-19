import {Experience} from "./experience";
import {Education} from "./education";

export interface Person {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email: string;
  introduction: string;
  imageUrl?: string;
  experiences : Experience[];
  educations : Education[];
  interests : string;
}
