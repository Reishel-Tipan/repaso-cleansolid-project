interface User {
    id: number;
    name: string;
}

// SubscriptionBloc: responsabilidad única de gestionar suscripciones
class SubscriptionBloc {

    onAddSubscription( subscriptionId: number ) {
        // Simula la gestión de suscripciones
        console.log('Agregando suscripción:', subscriptionId );
    }

}

// UserService: centraliza las peticiones de datos (BD / API)
class UserService {

    getUser( id: number ) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user );
    }

}

// Mailer: clase genérica encargada del envío de correos
class Mailer {

    sendEmail() {
        // Simula el envío de notificaciones
        console.log('Enviando correo a los usuarios');
    }

}

// UserBloc coordina el proceso usando inyección de dependencias
class UserBloc {

    constructor(
        private userService: UserService,
        private mailer: Mailer,
    ) {}

    loadUser( id: number ) {
        this.userService.getUser( id );
    }

    saveUser( user: User ) {
        this.userService.saveUser( user );
    }

    notifyUser() {
        this.mailer.sendEmail();
    }

}

const userService = new UserService();
const mailer = new Mailer();
const userBloc = new UserBloc( userService, mailer );
const subscriptionBloc = new SubscriptionBloc();

userBloc.loadUser(10);
userBloc.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
subscriptionBloc.onAddSubscription(1234);
