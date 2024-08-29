const pricingPlans = [
  {
    title: "Starter",
    price: "Free",
    description: "Perfect for individual teachers who want to get a taste of automated grading.",
    features: [
      "Up to 10 Assignments per month",
      "Detailed Grading Reports",
      "Email Support"
    ],
    buttonText: "Choose Starter",
  },
  {
    title: "Basic",
    price: "$4.99/mo",
    description: "Ideal for schools or educators who need more frequent grading capabilities.",
    features: [
      "Up to 50 Assignments per month",
      "Detailed Grading Reports",
      "Priority Email Support"
    ],
    buttonText: "Choose Basic",
  },
  {
    title: "Premium",
    price: "$20/mo",
    description: "The best value for institutions or educators with high grading needs and many students.",
    features: [
      "Unlimited Assignments per month",
      "Advanced Grading Analytics",
      "24/7 Support",
    ],
    buttonText: "Choose Premium",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing Plans"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-black sm:text-6xl">
            Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-700 leading-7">
            Choose the plan that best fits your grading needs and start saving time with automated homework grading.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {pricingPlans.map((plan, planIndex) => (
            <li key={planIndex}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 hover:scale-105 transition duration-300 ease-in-out">
                <blockquote className="relative">
                  <p className="text-2xl font-bold text-black">
                    {plan.title}
                  </p>
                  <p className="text-lg text-gray-900 mt-2">
                    {plan.price}
                  </p>
                  <p className="text-lg text-gray-700 mt-4">
                    {plan.description}
                  </p>
                  <ul className="list-disc ml-5 mt-4 text-lg text-gray-700">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mt-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </blockquote>
                <button
                  className="mt-6 w-full bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-500 transition"
                >
                  {plan.buttonText}
                </button>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
