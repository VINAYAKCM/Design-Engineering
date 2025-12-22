import chef from '../assets/chef.png';

export default function Header() {
    return (
        <header className="header">
        <img src={chef} alt="Chef Claude Logo" className="logo" />
        <h1>Chef Claude</h1>

        </header>
    )
    }