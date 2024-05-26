import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { HBox } from "./sizebox";
export default function ExpandableCard({ heading, body }) {
	const [expanded, setExpanded] = useState(false);

	function toggleExpansion() {
		setExpanded((prev) => !prev);
	}

	return (
		<div
			className="exandable-card"
			style={{
				borderRadius: expanded ? "50px" : "40px",
			}}
		>
			<div className="top">
				<h4 className={expanded ? "wt-700" : "wt-600"}>{heading}</h4>
				{expanded ? (
					<BiMinus size="40" onClick={toggleExpansion} />
				) : (
					<BiPlus size="40" onClick={toggleExpansion} />
				)}
			</div>
			<div className="bottom">
				{expanded ? <p>{body}</p> : ""}
				<HBox w="25" />
			</div>
		</div>
	);
}
