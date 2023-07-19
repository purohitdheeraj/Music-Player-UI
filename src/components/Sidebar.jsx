import { useOutlet } from "react-router-dom";

function Sidebar() {
	const outlet = useOutlet();
	return <section className="sidebar">{outlet}</section>;
}

export default Sidebar;
