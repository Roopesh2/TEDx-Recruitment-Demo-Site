import logo from "./assets/logo.png";
export default function Header() {
	return (
		<header>
			<img src={logo} alt="" className="logo" />
			<div className="flag">🇦🇹</div>
		</header>
	);
}
