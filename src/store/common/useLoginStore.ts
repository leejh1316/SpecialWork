import { AuthenticationStatus } from "@/model";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore('login',()=>{
  const authStaus = ref<AuthenticationStatus>('pending');
  return {authStaus}  
})

