export function devLog(...param : any){
    if(import.meta.env.DEV) console.log(...param)
}