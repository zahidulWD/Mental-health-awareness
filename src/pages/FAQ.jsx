import { useState } from "react";

const faqs = [
  {
    question: "What is MindNest?",
    answer: "MindNest is a platform dedicated to improving mental well-being through resources, guides, and community support."
  },
  {
    question: "How can I join a therapy session?",
    answer: "You can register through the 'Register now' button and choose the therapy plan that suits you."
  },
  {
    question: "Is MindNest suitable for beginners?",
    answer: "Yes! MindNest is designed for everyone, from beginners to experienced mindfulness practitioners."
  },
  {
    question: "Can I access Wellness guides for free?",
    answer: "Yes, some wellness guides are free. Premium guides require registration or a plan."
  },
  {
    question: "How can I contact MindNest support?",
    answer: "You can reach out via the contact page or email us at mindnest@gmail.com for any support or queries."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#EDF1E6]">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2B3E00] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#4F7100]/30 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-[#2B3E00] font-medium bg-white hover:bg-[#F5F9F0] transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-[#F5F9F0] text-[#4F7100] transition-all">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
