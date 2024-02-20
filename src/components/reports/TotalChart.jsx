import AreaChar from "./AreaChar";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

function TotalChart({ data, overallResult, percentage, text }) {
  return (
    <div className="w-full bg-darkerblue rounded-[20px] py-3 pl-6 text-center flex flex-col justify-center items-start gap-4 h-[160px] lg:h-[174px]">
				<h2 className="text-xl font-bold text-slate-300 capitalize">{text}</h2>
				<div className="w-full h-full">
					<AreaChar
						data={data}
						className="w-full"
						fill={overallResult ? "#15cab85e" : "#FB3B3A44"}
						stroke={overallResult ? "#15CAB8" : "#f10000"}
					/>
				</div>
				<div className="flex flex-row justify-start items-center gap-2">
					{overallResult ? (
						<FaArrowTrendUp className="text-green text-sm" />
					) : (
						<FaArrowTrendDown className="text-red-500 text-sm" />
					)}
					<p className="text-slate-300 text-sm font-normal">
						{" "}
						<span
							className={`${
								overallResult ? "text-green" : "text-red-500"
							} ' ' font-semibold`}
						>
							{overallResult ? " " : "-"}
							{percentage}%
						</span>{" "}
						vc yesterday{" "}
					</p>
				</div>
			</div>
  )
}

export default TotalChart