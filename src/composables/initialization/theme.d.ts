import { Theme } from "@utils/theme";
declare module "@utils/theme" {
  interface Theme {
    //여기에 [key:string] : type 의 타입을 지정해주세요.
    "card-background"?: string;
    "text-primary"?: string;
    "text-secondary"?: string;
    "text-tertiary"?: string;
  }
}
