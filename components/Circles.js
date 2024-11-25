import Image from "next/image";
import { cn } from "../utils/utils";

const Circles = ({ className, id }) => {
  return (
    <div
      id={id}
      className={cn(
        "w-[250px] mix-blend-hard-light animate-pulse duration-75",
        className
      )}
    >
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circle"
        priority
      />
    </div>
  );
};

export default Circles;
