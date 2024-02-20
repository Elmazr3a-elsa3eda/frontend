import SalesChart from "./SalesChart"
import salesAnalytics from "../../data/salesAnalytics";

function SalesChartComp() {
  return (
      <div className="bg-darkerblue rounded-[20px] p-6 w-full text-center h-[380px] flex flex-col justify-between items-start gap-5 pr-1 md:pr-4">
        <div className="w-full flex flex-row justify-between items-center pl-4">
          <h1 className="md:text-2xl text-lg font-semibold text-slate-300 capitalize">sales analytics</h1>
        </div>
        <div className="w-full h-full justify-self-start">
          <SalesChart data={salesAnalytics}/>
        </div>
      </div>
  )
}

export default SalesChartComp