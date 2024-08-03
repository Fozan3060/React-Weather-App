import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useWeatherContext } from "../../Context/WeatherContext";
import LazySuneventCard from "../lazyloaded/LazySuneventCard";
import LazyWeatherMetrics from "../lazyloaded/LazyWeatherMetrics";
import LazyWeatherForecastCard from "../lazyloaded/LazyWeatherForecastCard";
import MainbarDefaultImages from "../Default_Fallback/MainbarDefaultImages";

const WeatherForecastCard = lazy(() => import("./WeatherForecastCard"));
const DetailedWeatherCard = lazy(() => import("./DetailedWeatherCard"));

const FallbackComponent: React.FC = () => (
  <MainbarDefaultImages text="Incorrect City" />
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
            <MainbarDefaultImages text="No City Searched" />
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Mainbar;
