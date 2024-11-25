import Link from "next/link";
import { appendStateName, getChunks } from "../../utils/utils";
function HeroSection(props) {
  const { subHeading, contactRef, heading, redWords } = props;

  const renderHeading = () => {
    const headingWithStateName = appendStateName(heading, "{{STATE_NAME}}");
    return getChunks({
      str: headingWithStateName,
      stateName: "{{STATE_NAME}}",
      redWords,
    });
  };
  const renderSubHeading = () => {
    const subHeadingWithStateName = appendStateName(
      subHeading,
      "{{STATE_NAME}}"
    );
    return getChunks({
      str: subHeadingWithStateName,
      stateName: "{{STATE_NAME}}",
      redWords,
    });
  };

  const renderTitleAndButtons = () => (
    <>
      <div className="flex flex-col w-full space-y-8 lg:flex-grow">
        <h2
          className="font-bold text-left text-white leading-tight text-[35px] md:text-[55px]"
          dangerouslySetInnerHTML={{
            __html: renderHeading(),
          }}
        ></h2>
        <div className="mt-2 text-left sb-markdown sm:text-lg">
          <h3
            className="font-bold text-left text-white text-[25px] leading-tight md:text-[45px] italic underline"
            style={{ textShadow: "0px 0px 10px rgb(182 11 11)" }}
            dangerouslySetInnerHTML={{
              __html: renderSubHeading(),
            }}
          ></h3>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-start w-full gap-3 md:items-center md:flex-row lg:flex-nowrap md:h-[90px]">
        {renderButtons()}
      </div>
    </>
  );
  const renderButtons = () => (
    <>
      {/* <button
        aria-label="Contractors Insurance"
        id="Contractors Insurance"
        className="w-[240px] md:w-auto inline-flex items-center justify-center py-3 font-medium tracking-normal text-center text-white no-underline rounded-md transition-all duration-150 ease-in-out bg-[#125b9a]  border-white cursor-pointer hover:bg-[#18446a] px-7 text-transform-none"
        onClick={() => {
          contactRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
      
        <span>Get My Quote Now</span>
      </button> */}

      <div
        onClick={() => {
          contactRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <img
          // src={buttonImage}
          src="/hero-btn.webp"
          alt="phone icon"
          aria-label="Contractors Insurance"
          id="Contractors Insurance"
          className="w-[240px] md:w-auto h-12 inline-flex items-center justify-center font-medium tracking-normal no-underline transition-all duration-300 ease-in-out bg-transparent border-2 border-[rgb(245,245,245)] rounded-md cursor-pointer   text-transform-none"
          style={{
            filter: "saturate(1.2)",
            boxShadow: "0px 0px 8px 1px rgba(245,245,245)",
          }}
        />
      </div>

      <Link
        href="tel:713-589-4072"
        aria-label="Contractors Insurance"
        id="Contractors Insurances"
        className="w-[240px] md:w-auto inline-flex items-center justify-center py-3 font-medium tracking-normal text-center text-white no-underline transition-all duration-300 ease-in-out bg-[#125b9a] rounded-md cursor-pointer hover:bg-[#18446a] px-7 text-transform-none"
      >
        <span>
          Click to Call <br className="md:hidden" /> (713)-589-4072
        </span>
      </Link>
    </>
  );
  return (
    <div className="z-40 flex min-h-[70vh] md:min-h-[50vh] flex-col items-center justify-between md:justify-center max-w-screen-lg pl-4 pr-4 space-y-16 overflow-auto scrollbar-hide border-none">
      {renderTitleAndButtons()}
    </div>
  );
}
export default HeroSection;
