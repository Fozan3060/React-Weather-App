import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TiWeatherDownpour } from "react-icons/ti";
import { useWeatherContext } from "../../Context/WeatherContext";
import LazySuneventCard from "../lazyloaded/LazySuneventCard";
import LazyWeatherMetrics from "../lazyloaded/LazyWeatherMetrics";
import LazyWeatherForecastCard from "../lazyloaded/LazyWeatherForecastCard";

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
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Mainbar;
