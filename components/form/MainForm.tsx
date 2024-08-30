"use client";

import ImageForm from "./ImageForm";
import { useEffect, useState } from "react";

export function MainForm() {
	const [url, setUrl] = useState<{
		url: string;
		thumbnailUrl: string | null;
	}>();
	const [url2, setUrl2] = useState<{
		url: string;
		thumbnailUrl: string | null;
	}>();

	useEffect(() => {
		const getCurrentUser = async () => {
			try {
				setUrl({ url: "", thumbnailUrl: null });
			} catch (error) {
				console.log(error);
			}
		};

		getCurrentUser();
	}, []);

	return (
		<section className="flex flex-col gap-4">
			<ImageForm url={url} setUrl={setUrl} />
		</section>
	);
}
