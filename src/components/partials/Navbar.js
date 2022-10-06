import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <nav>
                    <Link to='/'>Home</Link> {' | '}
                    <Link to='/characters'>All Characters</Link> {' | '}
                    <Link to='/characters/new'>Add Character</Link>
        </nav>
    )
}