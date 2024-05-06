import { Button } from "./button";

export default function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto  overflow-hidden">
            <img
              src="https://www.latrobe.edu.au/edit-homepage/landing-feature-a/LTUT-1985.01-7.jpg/large.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
        </div>

        <section className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-5 pt-32 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              A.D. Trendall Research Centre For Ancient Mediterranean Studies
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
              We share the latest research in Greek and Roman art and
              archaeology.
            </p>

            <div className="">
              <Button
                className="mt-6  w-full sm:w-auto"
                onClick={() => (window.location.href = "/about")}
              >
                Find out more
              </Button>
            </div>
            
            <Button
              className="mt-6  w-full sm:w-auto"
              onClick={() => (window.location.href = "/legacy")}
            >
              Remembering A.D. Trendall
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

