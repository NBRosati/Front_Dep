import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`NBR app: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('es', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Bienvenido {username}!</h1>

            <p><Link to="/dash/notes">Ver Notas de Clientes</Link></p>

            <p><Link to="/dash/notes/new">Añadir Notas de Clientes</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">Ver Usuarios</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Añadir Usuarios</Link></p>}

        </section>
    )

    return content
}
export default Welcome