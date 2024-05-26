import logo from "./assets/logo.png";
import "./styles/header.scss";
export default function Header() {
	return (
		<header>
			<div className="img">
				<img src={logo} alt="" className="logo" />
			</div>
			<div className="flag">🇬🇧</div>
		</header>
	);
}
