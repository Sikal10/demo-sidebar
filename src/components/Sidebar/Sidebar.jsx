import {sidebarData} from "../../sidebarData";
import "./sidebar.css";

const Sidebar = () => {

    const handleClick = (value) => {
        window.location.pathname = value.link;
    }

    return (
        <div className={"sidebars"}>
            <ul className={"sidebars__list"}>
                {sidebarData.map((value, index) => {
                    return (
                        <li key={index} className={`sidebars__listRow ${window.location.pathname === value.link ? "active" : ""}`} onClick={() => handleClick(value) }>
                        <div className={"sidebars__listRow--icon"}>{value.icon}</div>
                        <div className={"sidebars__listRow--title"}>{value.title}</div>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Sidebar;