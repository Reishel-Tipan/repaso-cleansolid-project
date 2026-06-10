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

    loadUser( id: number ) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user );
    }

}

// UserBloc ya no accede directamente a la base de datos
class UserBloc {

    notifyUser() {
        // Simula el envío de notificaciones
        console.log('Enviando correo a los usuarios');
    }

}

const userBloc = new UserBloc();
const subscriptionBloc = new SubscriptionBloc();
const userService = new UserService();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
subscriptionBloc.onAddSubscription(1234);
