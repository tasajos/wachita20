npm install
install bootstrat
    >npm install bootstrap
    >Después de que la instalación se complete, abre el archivo angular.json en tu editor de código.
    >Busca la sección "styles" y agrega la siguiente línea de código:
    >"node_modules/bootstrap/dist/css/bootstrap.min.css"
    >Busca la sección "scripts" y agrega la siguiente línea de código:
    >"node_modules/bootstrap/dist/js/bootstrap.min.js"
configurar routerLink
    >AppRoutingModule
    ><router-outlet></router-outlet> 
firebase login
    >firebase login
    >firebase projects:list
    >ng add @angular/fire

    en filestorage a;adir

     imports: [
        ...
        AngularFireModule.initializeApp(environment.firebase),
    ],

