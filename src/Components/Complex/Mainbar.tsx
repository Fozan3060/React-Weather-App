import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TiWeatherDownpour } from "react-icons/ti";
import { useWeatherContext } from "../../Context/WeatherContext";
import LazySuneventCard from "../lazyloaded/LazySuneventCard";
import LazyWeatherMetrics from "../lazyloaded/LazyWeatherMetrics";
import LazyWeatherForecastCard from "../lazyloaded/LazyWeatherForecastCard";
import SimpleSlider from "../Compound/Slider";

const WeatherForecastCard = lazy(() => import("./WeatherForecastCard"));
const DetailedWeatherCard = lazy(() => import("./DetailedWeatherCard"));

const FallbackComponent: React.FC = () => (
  <div role="alert">
    <h1 className="text-center mt-5 text-white">
      Please Make Sure Such City Exists
    </h1>
  </div>
);

const Mainbar: React.FC = () => {
  const { searchCity } = useWeatherContext();
  return (
    <div className="dark:bg-linearMainDark bg-linearMain flex flex-col   min-h-screen  w-full lg:w-2/3 p-2 lg:p-4 xl:p-7 overflow-x-hidden">
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        resetKeys={[searchCity]}
      >
        <Suspense
          fallback={
            <div className="flex-col ">
              <LazySuneventCard />
              <LazyWeatherMetrics />
              <LazyWeatherForecastCard />
            </div>
          }
        >
          {searchCity ? (
            <>
              <DetailedWeatherCard />
              <WeatherForecastCard />
            </>
          ) : (
            <>
              <div className="flex justify-center gap-5 md:gap-10   rounded-lg mt-10">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    className="h-56 bg-opacity-30 bg-white w-28 rounded-[4rem]"
                    key={index}
                  >
                    <h1 className="mt-14 text-center">No city searched</h1>
                    <TiWeatherDownpour className="m-auto mt-5" size={60} />
                  </div>
                ))}
              </div>
              <div className="w-3/4 rounded-lg justify-center mt-20 gap-sm-20 gap-6 flex h-10  mx-auto bg-white bg-opacity-30">
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
              <div>
                <div className="flex justify-center gap-5 md:gap-10   rounded-lg mt-10">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div
                      className="h-56 bg-opacity-30 bg-white w-28 rounded-md sm:block hidden"
                      key={index}
                    >
                      <h1 className="mt-14 text-center">No city searched</h1>
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
                        <h1 className="mt-14 text-center">No city searched</h1>
                        <TiWeatherDownpour className="m-auto mt-5" size={60} />
                      </div>
                    ))}
                  </SimpleSlider>
                </div>
              </div>
            </>
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Mainbar;
