import Image from "next/image";

interface SocialIconProps {
	title: string;
	src?: string;
	background?: boolean;
	href?: string;
	imageClassName?: string;
}

const SocialIcon = (props: SocialIconProps) => {
	return (
		<div className="mx-12 mt-10 cursor-pointer pointer-events-auto">
			<a href={props.href}>
				<div
					className={`mb-4 ${
						props.background && "bg-slate-400"
					} p-1 rounded-full flex items-center justify-center`}
				>
					<Image
						src={props.src ? props.src : "/mafia.png"}
						alt="Chapan Harder"
						width="150"
						height="150"
						className={`${props.imageClassName} w-[64px] h-[64px] md:w-[150px] md:h-[150px]`}
					/>
				</div>
				<p className="w-full text-center mt-1 text-xl capitalize text-white font-bold">
					{props.title}
				</p>
			</a>
		</div>
	);
};

export default SocialIcon;
