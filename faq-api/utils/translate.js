const axios = require("axios");
const redis = require("redis");

const client = redis.createClient({ url: process.env.REDIS_URL });
client.connect();

const translateText = async (text, targetLang) => {
  const cacheKey = `translate_${text}_${targetLang}`;
  const cachedTranslation = await client.get(cacheKey);

  if (cachedTranslation) return cachedTranslation;

  try {
    const response = await axios.get(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    );
    const translation = response.data[0][0][0];

    await client.set(cacheKey, translation, { EX: 86400 }); // Cache for 1 day
    return translation;
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Fallback to original
  }
};

module.exports = { translateText };
