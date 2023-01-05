import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Nahuel Busto Rosati <span className="nowrap">CRM+</span></h1>
            </header>
            <main className="public__main">
                <p>Proyecto Final PWA</p>
                <address className="public__addr">
                    MERN app<br />
                    Notas de clientes<br />
                    CRUD completo<br />
                </address>
                <br />
                <p>UTN .BA</p>
            </main>
            <footer>
                <Link to="/login">INICIO SESION / LOGIN</Link>
            </footer>
        </section>

    )
    return content
}
export default Public