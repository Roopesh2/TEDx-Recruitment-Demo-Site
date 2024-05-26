import Card from "./card";
import "../styles/card.scss";
/**
 * @param {Object} param0
 * @param {Array<Object>} param0.list
 * @returns
 */
export default function CardList({ list }) {
	return (
		<div className="card-view">
			{list.map((item, index) => (
				<Card
					key={index}
					bgColor={item.bgColor}
					icon={item.icon}
					heading={item.heading}
					subheading={item.subheading}
					subsubheading={item.subsubheading}
					detail={item.detail}
				/>
			))}
		</div>
	);
}
