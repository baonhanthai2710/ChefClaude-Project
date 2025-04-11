import { PiChefHatLight } from "react-icons/pi";

export default function Header () {
    return (
        <header className="header-container">
            <PiChefHatLight className="chef-icon" />
            <p>Chef Claude</p>
        </header>
    )
}