import { RxArrowTopRight } from "react-icons/rx";
import { getServiceIcon } from "../utils/utils";
// import { FaTv } from "react-icons/fa";

export default function ServiceItem({ service }) {
  return (
    <div className="serviceItem-card bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex flex-col gap-x-0 group cursor-pointer items-stretch hover:bg-[#5941a926] transtition-all duration-300">
      <div className="mb-4 text-4xl text-accent">
        {getServiceIcon(service.icon)}
      </div>
      <div className="mb-8">
        <div className="mb-2 text-lg">{service.title}</div>
        <p className="max-w-[350px] leading-normal">{service.description}</p>
      </div>
      <div className="text-3xl">
        <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
      </div>
    </div>
  );
}
