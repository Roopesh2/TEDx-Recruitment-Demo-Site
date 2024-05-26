import ExpandableCard from "./expandableCard";
import "../styles/card.scss";

/**
 *
 * @param {Object} param0
 * @param {Array<Object>} param0.list
 * @returns
 */
export default function ExpandableCardList({ list }) {
	return (
		<div className="exandable-card-container">
			{list.map((item, index) => (
				<ExpandableCard key={index} heading={item.heading} body={item.body} />
			))}
		</div>
	);
}
