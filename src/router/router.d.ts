import "vue-router";

export {}

declare module 'vue-router' {
    type RouteItem = RouteRecordRaw & {
        icon ?:string
    }
} 