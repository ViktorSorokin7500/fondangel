import ModalImage from "@/components/shared/ModalImage";
import img1 from "/public/assets/dovidka/1.jpg";
import img2 from "/public/assets/dovidka/2.jpg";
import img3 from "/public/assets/dovidka/3.jpg";

const Certificate = () => {
	const images = [img1, img2, img3];
	return (
		<section className="flex flex-col justify-center items-center gap-4 py-4">
			<h2 className="h3 text-center uppercase">Свидетельства фонда "Ангел"</h2>
			<div className="flex flex-wrap gap-4 justify-center">
				{images.map((image, index) => (
					<ModalImage key={index} img={image} />
				))}
			</div>
		</section>
	);
};

export default Certificate;
