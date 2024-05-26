export const VBox = ({ h }) => {
	h = String(parseFloat(h)).length != h.length ? h : h + "px";
	return <div style={{ minHeight: h, maxHeight: h }}></div>;
};
export const HBox = ({ w }) => {
	w = String(parseFloat(w)).length != w.length ? w : w + "px";
	return <div style={{ minWidth: w, maxWidth: w }}></div>;
};
