const processSteps = [  
  [
    {
      step: "Step 1:",
      description:
        "Upload the student's homework and your solution to gradeChecker AI web app." ,
    },
  ],
  [
    {
      step: "Step 2:",
      description:
        "gradeChecker AI analyzes the submissions and compares the student's work to the solution.",
    },
  ],
  [
    {
      step: "Step 3:",
      description:
        "Receive a detailed grading report with corrections and suggestions for improvement.",
    },
  ],
];

export function Process() {
  return (
    <section
      id="process"
      aria-label="How gradeChecker AI works"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-black sm:text-6xl">
            How it works
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-700 leading-7">
            Follow these simple steps to get your students' work graded quickly and accurately.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {processSteps.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <blockquote className="relative">
                        <p className="text-2xl font-bold text-black">
                          {step.step}
                        </p>
                        <p className="text-lg tracking-tight text-black mt-2">
                          {step.description}
                        </p>
                      </blockquote>
                    </figure>
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
