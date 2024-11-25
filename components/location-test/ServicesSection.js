import ServiceItem from "../ServiceItem";
import { renderText } from "../../utils/utils";

function ServicesSection(props) {
  const { services, servicesTitle, servicesSubtitle } = props;

  return (
    <div className="relative flex items-center mt-12 mb-12 md:mt-20 md:mb-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex flex-col w-full mb-4 text-center">
            <h2
              className="h3 xl:mt-8"
              dangerouslySetInnerHTML={{
                __html: renderText(servicesTitle, "{{STATE_NAME}}"),
              }}
            ></h2>
            <p className="text-lg text-center text-white sm:text-xl">
              {servicesSubtitle}
            </p>
          </div>
          {services && services.length > 0 && (
            <div className="grid grid-cols-12">
              {services.map((service, index) => (
                <div key={index} className="col-span-12 p-4 md:col-span-4">
                  <ServiceItem service={service} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
