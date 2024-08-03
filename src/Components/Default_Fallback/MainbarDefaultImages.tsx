import { TiWeatherDownpour } from "react-icons/ti";
import SimpleSlider from "../Compound/Slider";

const MainbarDefaultImages = ({ text }: { text: string }): JSX.Element => (
  <>
    <div className="flex justify-center gap-5 md:gap-10 dark:text-white  rounded-lg mt-10">
      {Array.from({ length: 3 }, (_, index) => (
        <div
          className="h-56 bg-opacity-30 bg-white w-28 rounded-[4rem]"
          key={index}
        >
          <h1 className="mt-14 text-center">{text}</h1>
          <TiWeatherDownpour className="m-auto mt-5" size={60} />
        </div>
      ))}
    </div>
    <div className="w-3/4 rounded-lg dark:text-white justify-center mt-20 gap-sm-20 gap-6 flex h-10  mx-auto bg-white bg-opacity-30">
      {Array.from({ length: 3 }, (_, index) => (
        <div
          className=" bg-opacity-30 flex justify-center items-center gap-3 "
          key={index}
        >
          <h1 className="">NA</h1>
          <TiWeatherDownpour className=" " size={30} />
        </div>
      ))}
    </div>
    <div className="dark:text-white">
      <div className="flex justify-center  gap-5 md:gap-10   rounded-lg mt-10">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            className="h-56 bg-opacity-30 bg-white w-28 rounded-md sm:block hidden"
            key={index}
          >
            <h1 className="mt-14 text-center">{text}</h1>
            <TiWeatherDownpour className="m-auto mt-5" size={60} />
          </div>
        ))}
      </div>
      <div className=" w-40 m-auto sm:hidden block">
        <SimpleSlider>
          {Array.from({ length: 5 }, (_, index) => (
            <div
              className="h-56 bg-opacity-30 bg-white w-28 rounded-md sm:block hidden"
              key={index}
            >
              <h1 className="mt-14 text-center">{text}</h1>
              <TiWeatherDownpour className="m-auto mt-5" size={60} />
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
  </>
);

export default MainbarDefaultImages;
