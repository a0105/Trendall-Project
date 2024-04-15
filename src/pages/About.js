import React from "react";
import Header from "../components/Header";
import StudyRoom from "../images/study room view.jpg";

export default function About() {
  return (
    <>
      <Header />
      <h1 className="container mx-auto flex bg-gradient-to-r from-rose-700 to-black bg-clip-text px-5 py-16 pb-5  text-4xl font-semibold text-transparent transition-opacity text-center">
        About
      </h1>
      <div class="container mx-auto flex flex-col items-center px-5  md:flex-row">
        <div class="mb-12 flex flex-col items-center text-center md:w-1/2 md:items-start md:pr-16  lg:mb-0 lg:flex-grow lg:pr-9">
          <h2 class="bg-gradient-to-r from-rose-700 to-black bg-clip-text pb-5 text-3xl font-semibold text-transparent transition-opacity md:text-3xl">
            About the Trendall Research Centre
          </h2>
          <p class="leading-relaxed md:pb-8	md:text-left">
            The Classical Art Research Centre (CARC) is one of the strategic
            research units of the Oxford University Faculty of Classics. Our
            purpose is to stimulate and support fresh research on many aspects
            of ancient Greek and Roman art, as well as hosting our own projects.
            We provide physical and virtual archives and databases, web
            resources, conferences, workshops, and publications, serving a very
            global audience beyond Oxford.
          </p>

          <h3 className="bg-gradient-to-r from-rose-700 to-black bg-clip-text pb-5 text-center font-semibold text-transparent transition-opacity">
            Establishment and Mission of the Classical Art Research Centre
            (CARC)
          </h3>
          <p className="md:text-left ">
            CARC was created out of the Beazley Archive in 2007, when the
            Archive was moved into specially designed premises in the Ioannou
            Centre for Classical and Byzantine Studies, next to the Ashmolean
            Museum in central Oxford. The Beazley Archive contains the world's
            biggest photographic archive devoted to ancient Greek
            figure-decorated pottery. This Archive, and the online Beazley
            Archive Pottery Database (BAPD) remain at the heart of CARC's
            activities.
          </p>
        </div>
        <div class="w-5/6 shadow-2xl md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            class=" object-cover object-center"
            alt="Study Room View"
            src={StudyRoom}
          />
        </div>
      </div>

      
    </>
  );
}
