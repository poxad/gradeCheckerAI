import Image from "next/image";
import Link from "next/link";

const testimonials = [
  [
    {
      content:
        "gradeChecker AI saved me hours of grading. The AI was spot on with the results!",
      link: "https://twitter.com/",
      author: {
        name: "Sarah T.",
        role: "High School Teacher",
        image: "/paulo.jpg",
      },
    },
  ],
  [
    {
      content:
        "As a college professor, this tool has made my life so much easier. I can focus on teaching instead of grading!",
      link: "https://twitter.com/",
      author: {
        name: "Dr. John M.",
        role: "College Professor",
        image: "/bengio.jpg",
      },
    },
  ],
  [
    {
      content:
        "My students love getting instant feedback on their work. It's a game changer!",
      link: "https://twitter.com/",
      author: {
        name: "Emily W.",
        role: "Middle School Teacher",
        image: "/rafa.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our users are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-black sm:text-6xl">
            Trusted by educators worldwide
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-700 leading-7">
            See what our users are saying about{" "}
            <Link target="_blank" href="https://twitter.com/search?q=%23gradeCheckerAI">
              <span className="text-blue-600">#gradeCheckerAI</span>
            </Link>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-black">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-300 pt-6">
                          <div>
                            <div className="font-display text-base text-black">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-gray-700">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-gray-200">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt={`Picture of ${testimonial.author.name}`}
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
