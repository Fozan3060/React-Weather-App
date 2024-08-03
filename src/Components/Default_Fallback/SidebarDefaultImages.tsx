import { TiWeatherDownpour } from "react-icons/ti";

const SidebarDefaultImages = ({ text }: { text: string }): JSX.Element => (
  <div className="flex dark:text-white justify-center w-[80%] lg:gap-0 sm:gap-10 flex-col sm:flex-row items-center lg:flex-col">
    <div className=" h-80 w-[100%] bg-opacity-10 bg-white rounded-lg mt-10">
      <h1 className="text-center mt-10 dark:text-white text-black">{text}</h1>
      <TiWeatherDownpour className="m-auto " size={200} />
    </div>
    <div className=" h-42 w-[100%] bg-opacity-10 bg-white rounded-lg mt-4">
      <h1 className="text-center mt-10 dark:text-white text-black">{text}</h1>
      <TiWeatherDownpour className="m-auto mb-5" size={180} />
    </div>
  </div>
);

export default SidebarDefaultImages;
