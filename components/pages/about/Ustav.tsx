import img1 from "/public/assets/cert/1.jpg";
import img2 from "/public/assets/cert/2.jpg";
import img3 from "/public/assets/cert/3.jpg";
import img4 from "/public/assets/cert/4.jpg";
import img5 from "/public/assets/cert/5.jpg";
import img6 from "/public/assets/cert/6.jpg";
import img7 from "/public/assets/cert/7.jpg";
import img8 from "/public/assets/cert/8.jpg";
import img9 from "/public/assets/cert/9.jpg";
import img10 from "/public/assets/cert/10.jpg";
import img11 from "/public/assets/cert/11.jpg";
import img12 from "/public/assets/cert/12.jpg";
import img13 from "/public/assets/cert/13.jpg";
import img14 from "/public/assets/cert/14.jpg";
import img15 from "/public/assets/cert/15.jpg";
import img16 from "/public/assets/cert/16.jpg";
import img17 from "/public/assets/cert/17.jpg";
import ModalImage from "@/components/shared/ModalImage";

const Ustav = () => {
	const images = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
		img17,
	];
	return (
		<section className="flex flex-col gap-4">
			<h3 className="h3 text-center uppercase">
				Устав Благотворительного фонда &laquo;Ангел&raquo;
			</h3>
			<div className="flex flex-wrap gap-4 justify-center">
				{images.map((image, index) => (
					<ModalImage key={index} img={image} />
				))}
			</div>
		</section>
	);
};

export default Ustav;
