import InfoBoxGroup from "./components/infoboxGroup";
import Header from "./header";
import "./styles/App.scss";
import "./styles/review.scss";

import heroSVG from "./assets/hero-img.svg";
import followupSVG from "./assets/followup.svg";
import personPNG from "./assets/person.png";
import moreFeaturesSVG from "./assets/more-features.svg";

import Button from "./components/Button";
import ExpandableCardList from "./components/expandableCardList";
import { VBox } from "./components/sizebox";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FAQ_DATA, INFO_BOX_1, INFO_BOX_2 } from "./utils/data";
import Card from "./components/card";

import cardIcon1 from "./assets/1.png";
import cardIcon2 from "./assets/2.png";
import cardIcon3 from "./assets/3.png";
import cardIcon4 from "./assets/4.png";

function App() {
	return (
		<>
			<Header />
			<div className="responsive wrap-reverse hero">
				<div className="img">
					<img src={heroSVG} />
				</div>
				<div className="content">
					<h5 className="all-caps color-primary">Risus Praesent Vulputate</h5>
					<h1>Cursus Integer</h1>
					<h1 className="mb-h1-5">
						Consequat Tristique.<i className="cursor">|</i>
					</h1>
					<VBox h="25" />
					<InfoBoxGroup list={INFO_BOX_1} />
					<VBox h="20" />
					<Button text="Lorem Ipsum" variant="primary" className="mb-full-width" />
				</div>
			</div>

			<div className="responsive wrap-reverse bg-primary followup">
				<div className="img">
					<img src={followupSVG} />
				</div>
				<div className="content">
					<h2>Phasellus a vitae iaculis magna eleifend pulvinar velit odio</h2>
					<div className="margin-top">
						<p className="description-head">
							Vulputate et vulputate suspendisse natoque!
						</p>
						<p className="description">
							Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum
							blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et
							vulputate suspendisse natoque id tellus consectetur pulvinar et.
						</p>
					</div>
					<Button text="Lorem Ipsum" variant="secondary" className="mb-full-width" />
				</div>
			</div>

			<div className="responsive bp-1050-row bg-secondary features">
				<div className="content">
					<p className="color-primary description">
						Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh
						velit magna consectetur leo
					</p>
					<h2>Cursus Integer Conseq Aliquam Tristique</h2>
					<VBox h="25" />
					<Button text="Lorem Ipsum" variant="tertiary mb-full-width" />
					<VBox h="40" />
				</div>

				<div className="all-cards-container">
					<div className="card-container cc1">
						<Card
							icon={cardIcon1}
							heading="1"
							subheading="Phasellus Vitae"
							subsubheading="Quisque"
							detail="Porttitor Vitae Vel Amet"
							bgColor="tertiary"
						/>
						<Card
							icon={cardIcon2}
							heading="2"
							subheading="Iaculis Magna"
							subsubheading="Porttitor"
							detail="Neque Scelerisque Mattis."
							bgColor="primary"
						/>
					</div>
					<div className="card-container cc2">
						<Card
							icon={cardIcon3}
							heading="3"
							subheading="Eleifend Pulvinar"
							subsubheading="Vitae"
							detail="Consectur Nibh Velit"
							bgColor="tertiary"
						/>
						<Card
							icon={cardIcon4}
							heading="4"
							subheading="Velit Odio Phir"
							subsubheading="Ametneq"
							detail="Magna Consectur Leo."
							bgColor="primary"
						/>
					</div>
				</div>
			</div>

			<div className="flex-col-center bg-duotone review-container">
				<div className="responsive review">
					<div className="img">
						<img src={personPNG} />
					</div>
					<div className="content">
						<h3>What our customers thought?</h3>
						<p>
							Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum
							blandit rutrum at mauris enim pulvinar duis etiam duis.
						</p>
						<h4>Helly Davidson</h4>
						<div className="slider-container">
							<div className="slider">
								<MdOutlineArrowRightAlt
									size="50"
									style={{ scale: "-1" }}
									className="color-secondary"
								/>
								<MdOutlineArrowRightAlt size="50" className="color-primary" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="responsive wrap-reverse bg-primary more-features">
				<div className="img">
					<img src={moreFeaturesSVG} />
				</div>
				<div className="content">
					<h2>Cursus Integer Consequat Tristique.</h2>
					<VBox h="2.5vmax" />
					<InfoBoxGroup list={INFO_BOX_2} />

					<VBox h="2.5vmax" />
					<Button variant="secondary" className="mb-full-width" text="Lorem Ipsum" />
				</div>
			</div>

			<div className="bg-secondary faq">
				<h2>Phasellus a vitae iaculis magna.</h2>
				<p className="description-small">
					Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
				</p>
				<VBox h="1vmax" />
				<ExpandableCardList list={FAQ_DATA} />
			</div>

			<div className="responsive last">
				<h3>Vulputate et pulvinar ethre Suspendisse tellus consecteur</h3>
				<VBox h="20" />
				<div className="div">
					<Button text="Lorem Ipsum" variant="primary" className="mb-full-width" />
				</div>
			</div>

			<footer className="responsive">
				<div>Copyright &copy; 2024 Lorem ipsum</div>
				<div>
					<a href="#">Privacy Policy</a> | <a href="#">Terms and conditions</a>
				</div>
			</footer>
		</>
	);
}

export default App;
