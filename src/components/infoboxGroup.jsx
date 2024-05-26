import InfoBox from "./infobox";
import "../styles/infobox.scss";
/**
 *
 * @param {Object} param0
 * @param {Array<string>} param0.list
 * @returns
 */
export default function InfoBoxGroup({ list }) {
	return (
		<div className="infobox-container">
			{list.map((text, _) => (
				<InfoBox key={_} text={text} />
			))}
		</div>
	);
}
