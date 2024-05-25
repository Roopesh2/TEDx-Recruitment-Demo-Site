import InfoBox from "./infobox";

/**
 *
 * @param {Object} param0
 * @param {Array<string>} param0.list
 * @returns
 */
export default function InfoBoxGroup({ list }) {
	return (
		<div className="infobox-group">
			{list.map((text) => {
				<InfoBox text={text} />;
			})}
		</div>
	);
}
