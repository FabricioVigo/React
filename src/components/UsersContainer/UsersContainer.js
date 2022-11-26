import User from './User/User'
function UsersContainer() {
    // supongamos que manejamos logica para obtener data de usuarios
    const user ={
        name: 'Lucas',
        lastname: 'Pellegrino'
    }
    return(
        <div className="users-container">
            <User name={user.name} lastname={user.lastname}/>
            </div>

    );
    }

    export default UsersContainer;