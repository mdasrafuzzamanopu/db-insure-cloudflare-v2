import Image from "next/image";
import { cn } from "../utils/utils";

const Bulb = ({ className, id }) => {
  return (
    <div
      id={id}
      className={cn(
        "rotate-12 animate-pulse duration-75 w-[250px] mix-blend-hard-light",
        className
      )}
    >
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        alt="bulb"
        className="w-full h-full"
        priority
      />
    </div>
  );
};

export default Bulb;
