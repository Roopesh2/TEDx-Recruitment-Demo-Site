import checkImg from "../assets/check.svg";
export default function InfoBox({ text }) {
	return (
		<div className="infobox">
			<img src={checkImg} alt="" />
			<p>{text}</p>
		</div>
	);
}
