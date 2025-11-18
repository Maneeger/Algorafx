import React from 'react';
 import { Check, X, Star } from 'lucide-react';
 



// --- Pricing Data ---
const pricingPlans = [
  {
    title: 'Starter',
    price: '$19',
    description: 'Perfect for beginners starting their journey.',
    features: [
      { text: 'Access to Core Course Material', included: true },
      { text: '10 Hand-on Exercises', included: true },
      { text: 'Community Forum Access', included: true },
      { text: 'Weekly Live Q&A Sessions', included: false },
      { text: 'Personalized 1:1 Coaching', included: false },
    ],
    buttonText: 'Start Learning',
    isPrimary: false,
  },
  {
    title: 'Intermediate',
    price: '$49',
    description: 'Elevate your skills and dive deep into the subject.',
    features: [
      { text: 'Everything in Starter Plan', included: true },
      { text: 'Advanced Modules & Projects', included: true },
      { text: 'Dedicated Slack Channel', included: true },
      { text: 'Weekly Live Q&A Sessions', included: true },
      { text: 'Certificate of Completion', included: false },
    ],
    buttonText: 'Go Pro',
    isPrimary: true, // Highlight this card
  },
  {
    title: 'Advanced',
    price: '$99',
    description: 'Master the subject with expert guidance and support.',
    features: [
      { text: 'Everything in Intermediate Plan', included: true },
      { text: 'Portfolio Review Sessions', included: true },
      { text: 'Lifetime Access to Updates', included: true },
      { text: 'Personalized 1:1 Coaching', included: true },
      { text: 'Guaranteed Job Interview Prep', included: true },
    ],
    buttonText: 'Achieve Mastery',
    isPrimary: false,
  },
];


// --- Sub-Component for Pricing Card ---
const PricingCard = ({ plan }) => {
  const { title, price, description, features, buttonText, isPrimary } = plan;

  const cardClasses = isPrimary
    ? "bg-white border-2 border-indigo-600 shadow-xl scale-[1.02] transition-transform duration-300"
    : "bg-white border border-gray-200 shadow-lg";

  const buttonClasses = isPrimary
    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
    : "bg-gray-100 hover:bg-gray-200 text-indigo-600 border border-indigo-600";

  return (
    <div className={`flex flex-col p-6 mx-auto max-w-lg text-center rounded-xl h-full ${cardClasses}`}>

      {isPrimary && (
        <span className="absolute top-0 right-0 -mt-3 -mr-3 p-1 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600 rounded-full flex items-center">
          <Star /> Best Value
        </span>
      )}

      <h3 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg">{description}</p>
      
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold text-gray-900">{price}</span>
        <span className="text-gray-500">/ month</span>
      </div>

      {/* Feature List */}
      <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-700">
            {feature.included ? <Check /> : <X />}
            <span className={!feature.included ? "line-through text-gray-400" : ""}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => console.log(`Selected ${title} Plan`)}
        className={`mt-auto py-3 px-5 text-sm font-medium rounded-lg transition-colors duration-200 ${buttonClasses}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const PricingSection = () => {
    return (
        <div className="w-full  flex flex-col items-center">
            
            {/* Header / Title Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    Choose the Right Plan for You
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                    Flexible courses designed to fit your pace and goals.
                </p>
            </div>

            {/* Pricing Card Grid - Responsive Layout */}
            <div className="w-full grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-3 ">
                {pricingPlans.map((plan) => (
                    <div key={plan.title} className="relative">
                        {/* The PricingCard component remains focused on individual plan display */}
                        <PricingCard plan={plan} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PricingSection