import "../styles/button.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
export default function Button({ text, variant, className }) {
	return (
		<button className={`btn-${variant} ${className}`}>
			{text}
			<span className="gap"></span>
			<HiArrowNarrowRight size="25" />
		</button>
	);
}
