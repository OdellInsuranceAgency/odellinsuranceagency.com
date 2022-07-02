import type {ReactElement} from "react";
import Link from "next/link";

type PageName = "Home" | "Services" | "Providers" | "Customers" | "Benefits" | "Contact Us";

const pages: { [name in PageName]: string } = {
    "Home": "/",
    "Services": "/services",
    "Providers": "/providers",
    "Customers": "/customers",
    "Benefits": "/benefits",
    "Contact Us": "/contact",
};

interface NavigationBarProps {
    page: PageName | null;
}

function NavigationItems(props: NavigationBarProps) {
    const items = [];
    for (const [name, route] of Object.entries(pages)) {
        items.push(<td key={name}>
            <Link href={route}>
                <a className={name == props.page ? "current" : undefined}>{name.toUpperCase()}</a>
            </Link>
        </td>);
    }
    return <>{items}</>;
}

export default function NavigationBar(props: NavigationBarProps): ReactElement {
    return <>
        {props.page != "Home" ? <Link href="/">
            <a>
                <div id="header"></div>
            </a>
        </Link> : <div id="header"></div>}
        <div id="speedbar">
            <table id="topmenu" cellPadding="0" cellSpacing="0" width="100%">
                <tbody>
                <tr>
                    <NavigationItems {...props}/>
                </tr>
                </tbody>
            </table>
            <div className="clearing">&nbsp;</div>
        </div>
    </>;
}
