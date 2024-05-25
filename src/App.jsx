import InfoBoxGroup from "./components/infoboxGroup";
import Header from "./header";
import "./styles/App.css";

import heroPNG from "./assets/hero-img.png";
import followupPNG from "./assets/followup.png";
import personPNG from "./assets/person.png";
import moreFeaturesPNG from "./assets/more-features.png";
import cardIcon1 from "./assets/1.png";
import cardIcon2 from "./assets/2.png";
import cardIcon3 from "./assets/3.png";
import cardIcon4 from "./assets/4.png";
import forwardSVG from "./assets/forward.svg";
import Button from "./components/Button";
import Card from "./components/card";
import ExpandableCard from "./components/expandableCard";
import ExpandableCardList from "./components/expandableCardList";
import CardList from "./components/cardList";

function App() {
	return (
		<>
			<Header />
			<div className="responsive wrap-right hero">
				<img src={heroPNG} />
				<div className="content">
					<h3 className="all-caps">Risus Praesent Vulputate</h3>
					<h1>
						Cursus Integer Consequat Tristique. <i className="cursor">|</i>
					</h1>
					<InfoBoxGroup
						list={[
							"Cursus Integer",
							"Integer Consequat",
							"Tellus Euismod Pellentesque",
							"Aliquot Tristique",
							"Pellestesque Tempus",
							"Mauris Fermentum Praesent",
						]}
					/>
					<Button text="Lorem Ipsum" variant="primary" />
				</div>
			</div>

			<div className="bg-primary followup">
				<img src={followupPNG} />
				<div className="content">
					<h2>Phasellus a vitae iaculis magna eleifend pulvinar velit odio</h2>
					<div className="margin-top">
						<a>Delectus et voluptate ratione eligendi!</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam est
							culpa dolorem nam nostrum voluptate commodi provident neque corporis
						</p>
					</div>
					<Button text="Lorem Ipsum" variant="no-bg color-white" />
				</div>
			</div>

			<div className="bg-secondary features">
				<div className="content">
					<p className="color-primary">
						Qolorem namnost volup commodi provident neque corporis mo pariatur dolore
						fugit aliquam leo.
					</p>
					<h2>Cursus Integer Conseq Aliquam Tristique</h2>
					<Button text="Lorem Ipsum" variant="secondary" />
				</div>

				<CardList
					list={[
						{
							icon: cardIcon1,
							heading: "1.",
							subheading: "Phasellus Vitae",
							subsubheading: "Quisque",
							detail: "PortitorVitae Vel Amet",
							bgColor: "trx",
						},
						{
							icon: cardIcon2,
							heading: "2.",
							subheading: "Iaculis Magna",
							subsubheading: "Porttitor",
							detail: "Neque Scelerisque Mattis.",
							bgColor: "primary",
						},
						{
							icon: cardIcon3,
							heading: "3.",
							subheading: "Eleifend Pulvinar",
							subsubheading: "Vitae",
							detail: "Consectur Nibh Velit",
							bgColor: "trx",
						},
						{
							icon: cardIcon4,
							heading: "4.",
							subheading: "Velit Odio Phir",
							subsubheading: "Ametneq",
							detail: "Magna Consectur Leo.",
							bgColor: "primary",
						},
					]}
				/>
				<div className=""></div>
			</div>

			<div className="review">
				<img src={personPNG} />
				<div className="content">
					<h2>What our customers thought?</h2>
					<p>
						Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum
						blandit rutrum at mauris enim pulvinar duis etiam duis.
					</p>
					<h5>Helly Davidson</h5>
					<div className="slider">
						<img src={forwardSVG} className="dir-inverted color-secondary" />
						<img src={forwardSVG} className="color-primary" />
					</div>
				</div>
			</div>

			<div className="bg-primary more-features">
				<img src={moreFeaturesPNG} />
				<div className="content">
					<h2>Cursus Integer Consequat Tristique.</h2>
					<InfoBoxGroup
						list={[
							"Tellus Ac viverra sed risus praesent vulpute",
							"Natoqu consectetur pulvinar",
							"Sollicitudin ornare tempus nulla varius pulvinar",
							"Varius pulvinar",
							"Natoque id tellus consectetur",
							"Vulputate et vulputate suspendisse",
						]}
					/>
					<Button variant="secondary" text="Lorem Ipsum" />
				</div>
			</div>

			<div className="bg-secondary faq">
				<h2>Phasellus a vitae iaculis magna.</h2>
				<p>Phasellus a vitae iaculis magna eleifend ulvinar velit odio.</p>
				<ExpandableCardList
					list={[
						{
							heading: "Quam vehicula faucibus amet lorem.",
							body: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
						},
						{ heading: "Pellentesque tempus sed phasellus vel.", body: "" },
						{
							heading:
								"Mauris fermentum praesent tellus euismod pellentesque urna ac massa in.",
							body: "",
						},
						{
							heading:
								"Vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.",
							body: "",
						},
						{
							heading:
								"Sollicitudin ornare tempus felis nulla varius pulvinar nibh viverra ornare.",
							body: "",
						},
						{ heading: "Consectetur nibh velit magna consectetur leo.", body: "" },
						{
							heading: "Quisque porttitor vitae vel amet neque scelerisque mattis.",
							body: "",
						},
					]}
				/>
			</div>

			<div className="last">
				<h2>Vulputate et pulvinar ethre Suspendisse tellus consecteur</h2>
				<Button text="Lorem Ipsum" variant="primary" />
			</div>

			<footer>
				<p>Copyright &copy; 2024 Lorem ipsum</p>
				<p>
					<a href="#">Privacy Policy</a> | <a href="#">Terms and conditions</a>
				</p>
			</footer>
		</>
	);
}

export default App;
