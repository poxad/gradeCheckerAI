import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Testimonials } from "../components/Testimonials";
import { Process } from "../components/Process";
import { Pricing } from "../components/Pricing";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          // href="https://gradechecker.ai"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-800 rounded-lg py-2 px-4 text-gray-800 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Trusted by thousands of teachers worldwide!
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-900 sm:text-7xl">
          Automatically grade student's homework{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-700  text-gray-700 leading-7">
          Upload your students' homework along with the solution, and let AI handle the grading. Save time and focus on teaching!
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Start Grading Now
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Teacher's Solution</h3>
                <Image
                  alt="Teacher's solution"
                  src="/teacher_solution.png"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={300}
                  height={300}
                />
              </div>
              <div className="sm:mt-40 mt-48">
                <Image
                  alt="Arrow pointing to the next image"
                  src="/arrow.png"
                  className="rounded-2xl"
                  width={100}
                  height={100}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Graded Homework</h3>
                <Image
                  alt="Graded homework example"
                  width={300}
                  height={300}
                  src="/graded_hw.png"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Process />
      <Pricing />
      {/* <p className="mx-auto mt-8 mb-6 max-w-xl text-lg text-gray-700 leading-7">
          Support our mission to make grading easier!
      </p>
      <div className="flex justify-center space-x-4 mb-2">
        <Link href="https://buymeacoffee.com/gradeCheckerAI" target="_blank">
        <Image
          width="200"
          height="100"
          src="/bmac.png"
          alt="Buy me a Coffee"
        />
        </Link>
      </div> */}
      <Footer />
    </div>
  );
}
