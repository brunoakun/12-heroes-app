## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## instalar Angular Material
ng add @angular/material

## Crear módulos de la app
ng g module auth
ng g module heroes
ng g module material

## Crear componentes
ng g component auth/pages/login
## Crear rutas
Crear navegación en src\app\app-routing.module.ts
Importarlo y exportarlo en app.module.ts

## routing con Lazy load
http://localhost:4200/auth/login

incluir en el app-routing.module el módulo de hijo a cargar, ya que en ese módulo está definido el routing del hijo
 {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
 },

## Instalar JSON Server Node.js CI
1.- crear db.json
2.- Instalar el server
   npm i json-server -g json-server 
3.- desde el teminal, levantar el server con:
   json-server --watch db.json

## Crear el interface desde https://app.quicktype.io/
## Crear el servicio para getHeroes desde http