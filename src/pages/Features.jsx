import React from "react";
import { FaBrain, FaUsers, FaComments, FaHandsHelping } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaBrain className="text-4xl text-[#4F7100]" />,
      title: "Mental Health Guidance",
      description:
        "Certified professionals provide evidence-based techniques to manage stress, anxiety, and emotional challenges effectively.",
    },
    {
      id: 2,
      icon: <FaUsers className="text-4xl text-[#4F7100]" />,
      title: "Community Support",
      description:
        "Join a safe and supportive community where you can share experiences and get encouragement from others who understand.",
    },
    {
      id: 3,
      icon: <FaComments className="text-4xl text-[#4F7100]" />,
      title: "Counseling & Therapy",
      description:
        "Access online and offline counseling sessions with trained psychologists to get personalized mental health care.",
    },
    {
      id: 4,
      icon: <FaHandsHelping className="text-4xl text-[#4F7100]" />,
      title: "Wellness Programs",
      description:
        "Participate in guided meditation, self-care workshops, and mindfulness sessions to improve your overall well-being.",
    },
  ];

  return (
    <section className="bg-[#FDF1DA] py-20">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4F7100] mb-4">
            Our Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Discover the core features designed to help you stay mentally fit, <br />
            emotionally balanced, and socially connected.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 rounded-2xl text-center border border-gray-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#4F7100] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
