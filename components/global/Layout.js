import Link from "next/link";
import { intLinks } from "../../data/link/internal";
import { useState } from "react";
export default function Layout({ children }) {
  /**
   * @param children is a children (page) element(NextPage)
   */

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div id="layout" className="w-full relative">
      <header className="w-full border-b border-opacity-50">
        <section className="w-full max-w-6xl mx-auto px-8 py-4 flex justify-between items-center ">
          <h1 className="font-bold text-4xl">
            <Link href={"/"}>
              <a>Uniride</a>
            </Link>
          </h1>
          <nav className="flex items-center space-x-2">
            {intLinks.map((eachLink, index) => (
              <Link href={eachLink.href} key={index}>
                <a className="transition-all hover hover:text-slate-400">
                  {eachLink.text}
                </a>
              </Link>
            ))}
          </nav>
        </section>
      </header>
      <div className="w-full bg-neutral-100">
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-y-0 md:space-x-4 md:items-center md:justify-center p-8 space-y-4">
          <div className="w-full flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-2 space-y-1">
            <label className="font-medium text-lg">From</label>
            <input
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className="w-full"
              id="date_from"
              name="date_from"
              type="date"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-2 space-y-1">
            <label className="font-medium text-lg">To</label>
            <input
              onChange={(e) => setTo(e.target.value)}
              value={to}
              className="w-full"
              id="date_to"
              name="date_to"
              type="date"
            />
          </div>
          {from && to && (
            <div className="w-full">
              <p className="text-sm font-thin">
                Setting the date from <strong>{from}</strong> to{" "}
                <strong>{to}</strong>.
              </p>
            </div>
          )}
        </section>
      </div>
      <div role="main">{children}</div>
      <footer>
        <section className="w-full text-center p-8">
          <p className="text-slate-500 font-medium text-sm">
            Uniride 2022 &copy; All rights reserved.
          </p>
        </section>
      </footer>
    </div>
  );
}
