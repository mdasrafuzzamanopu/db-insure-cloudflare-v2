import { sanitizeString } from "../utils/utils";

const Banners = (props) => {
  const { bannerList } = props;

  return (
    <div className="grid items-center grid-cols-12 gap-1 text-lg">
      {bannerList.map((item, index) => (
        <span
          key={index}
          className="text-white col-span-3 text-wrap text-center text-[10px] leading-tight md:leading-normal md:text-base font-normal w-[80px] md:w-[130px]"
        >
          {sanitizeString(item.title)}
        </span>
      ))}
    </div>
  );
};

export default Banners;
