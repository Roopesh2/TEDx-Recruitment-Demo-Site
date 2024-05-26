import { FaRegCheckCircle } from "react-icons/fa";
export default function InfoBox({ text }) {
	return (
		<div className="infobox">
			<FaRegCheckCircle />
			<span>{text}</span>
		</div>
	);
}
