import Background from "@/components/Background";
import SocialIcon from "@/components/SocialIcon";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Background />
			<div className="min-h-screen flex flex-col justify-center items-center overflow-y-scroll">
				<Image
					src="/mohsen.jpg"
					alt="Chapan Harder"
					width="220"
					height="220"
					className="rounded-full mt-10"
				/>
				<div className="flex flex-col mt-5 pointer-events-none mb-10">
					<div className="flex justify-center items-center">
						<div className="xl:flex">
							<SocialIcon
								src="/virasty.webp"
								title="virasty"
								href="https://virasty.com/Chapan_Harder"
							/>
							<SocialIcon
								src="/aparat.png"
								title="aparat"
								href="https://www.aparat.com/Chapan_Harder"
							/>
						</div>
						<div className="xl:flex">
							<SocialIcon
								src="/youtube.png"
								title="youtube"
								href="https://www.youtube.com/channel/UCMmQTiErKfCTQIQ_38PY63g"
							/>
							<SocialIcon
								src="/instagram.png"
								title="instagram"
								href="https://www.instagram.com/chapanharder"
							/>
						</div>
					</div>
					<div className="flex flex-col xl:flex-row justify-center items-center xl:-mt-20 pointer-events-none">
						<div className="flex">
							<SocialIcon
								src="/igap.png"
								title="iGap"
								href="https://profile.igap.net/ChapanHarder"
							/>
							<SocialIcon
								src="/blog.jpg"
								title="Blog"
								href="https://chapanharder.blog.ir"
								imageClassName="rounded-full"
							/>
						</div>
						<SocialIcon
							src="/telegram.webp"
							title="telegram"
							href="https://t.me/ChapanHarder"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	};
}
