import Link from "next/link";
import { AiFillCar } from "react-icons/ai";

export default function Homepage() {
  // const [dateFrom, setDateFrom] = useSTate

  return (
    <div className="w-full relative">
      <section className="w-full max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 gap-8">
        <article className="w-full flex flex-col items-center">
          <h3 className="text-4xl font-semibold text-center">
            Ride with <span className="text-themeRed">Uniride</span>{" "}
          </h3>
          <h2 className="text-6xl z-10 font-bold text-center py-10 border-y mt-12 relative">
            <AiFillCar className="z-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <p>
              Explore <span className="text-themeOrange">New World</span>
            </p>
          </h2>
        </article>
        <article className="flex flex-col justify-center items-center">
          <div className="w-full md:w-1/2   flex flex-col justify-center items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <Link href={"/passenger"}>
              <a className="w-full text-center px-6 py-3 bg-themeOrange text-themeWhite font-medium rounded-lg shadow transition-all hover  hover:bg-opacity-80">
                I&apos;m a Driver
              </a>
            </Link>
            <Link href={"/findMyDriver"}>
              <a className="w-full text-center px-6 py-3 bg-themeLight text-themeWhite font-medium rounded-lg shadow transition-all hover  hover:bg-opacity-80">
                I&apos;m a Passenger
              </a>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
