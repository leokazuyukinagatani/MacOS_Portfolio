import dayjs from "dayjs";
import {navIcons, navLinks} from "../constants";

export const Navbar = () => {
    return (
        <nav className="text-white">
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Kazuyuki's Portfolio</p>
                <ul>
                    {navLinks.map(({id, name}) =>
                        <li key={id}>
                            <p>{name}</p>
                        </li>)
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id, img}) =>
                    <li key={id}>
                        <img src={img} alt={`icon-${id}`} className="icon-hover"/>
                    </li>)}
                </ul>
                <time>{dayjs().format('ddd MMM D h:hm A')}</time>
            </div>
        </nav>
    )
}
