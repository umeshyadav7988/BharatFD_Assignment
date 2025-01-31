const FAQ = require("../models/FAQ");
const { translateText } = require("../utils/translate");

exports.createFAQ = async (req, res) => {
  try {
    let { question, answer } = req.body;

    const question_hi = await translateText(question, "hi");
    const question_bn = await translateText(question, "bn");

    const faq = new FAQ({ question, answer, question_hi, question_bn });
    await faq.save();
    
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Error creating FAQ", error });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const faqs = await FAQ.find();

    const translatedFAQs = faqs.map((faq) => ({
      id: faq._id,
      question: lang === "hi" ? faq.question_hi : lang === "bn" ? faq.question_bn : faq.question,
      answer: faq.answer,
    }));

    res.status(200).json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching FAQs", error });
  }
};
