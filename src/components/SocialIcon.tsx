import Image from "next/image";

interface SocialIconProps {
	title: string;
	src?: string;
	background?: boolean;
}

export default function (props: SocialIconProps) {
	return (
		<div
			className="mx-20 mt-10 cursor-pointer pointer-events-auto"
			onClick={() => {
				console.log("clicked");
			}}
		>
			<div
				className={`mb-4 ${
					props.background && "bg-slate-400"
				} p-1 rounded-full`}
			>
				<Image
					src={props.src ? props.src : "/mafia.png"}
					alt="Chapan Harder"
					width="150"
					height="150"
					className=""
				/>
			</div>
			<p className="w-full text-center mt-1 text-xl capitalize text-white font-bold">
				{props.title}
			</p>
		</div>
	);
}
