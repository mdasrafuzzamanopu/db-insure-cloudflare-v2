import Loader from "./Loader";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-20 h-20 ">
        <Loader color="#d82b40" />
      </div>
    </div>
  );
};

export default Loading;
