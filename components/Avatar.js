import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/man-smoking-transparent.png"}
        // src={"/man-smoking.jpg"}
        width={500}
        height={420}
        alt=""
        className="translate-z-0 xl:bg-cover xl:bg-right"
      />
    </div>
  );
};

export default Avatar;
