import Background from "@/components/Background";
import SocialIcon from "@/components/SocialIcon";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Background />
			<div className="h-screen flex flex-col justify-center items-center">
				<Image
					src="/mafia.png"
					alt="Chapan Harder"
					width="220"
					height="220"
					className="rounded-full"
				/>
				<div className="flex flex-col mt-5 pointer-events-none">
					<div className="flex">
						<SocialIcon src="/virasty.webp" title="virasty" />
						<SocialIcon src="/aparat.png" title="aparat" />
						<SocialIcon src="/youtube.png" title="youtube" />
						<SocialIcon src="/instagram.png" title="instagram" />
					</div>
					<div className="flex justify-center items-center -mt-20 pointer-events-none">
						<SocialIcon src="/igap.png" title="iGap" />
						<SocialIcon title="Blog" />
						<SocialIcon src="/telegram.webp" title="telegram" />
					</div>
				</div>
			</div>
		</>
	);
}
