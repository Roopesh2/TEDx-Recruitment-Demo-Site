import iconAdd from "../assets/add.svg";
export default function ExpandableCard({ heading, body }) {
	return (
		<div className="exandable-card">
			<div className="content">
				<h4>{heading}</h4>
				<p>{body}</p>
			</div>
			<img src={iconAdd} />
		</div>
	);
}
