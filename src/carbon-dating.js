const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;  // Сучасна активність
const HALF_LIFE_PERIOD = 5730;  // Період піврозпаду

/**
 * Функція для визначення віку археологічної знахідки на основі активності зразка.
 * 
 * @param {String} sampleActivity — строкове представлення поточної активності зразка.
 * @return {Number | Boolean} обчислений вік у роках або false у разі некоректного sampleActivity.
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Перевірка на коректність вхідного параметра
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity) || Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }

  const sampleActivityValue = Number(sampleActivity);

  // Обчислення віку за допомогою формули вуглецевого датування:
  // t = (ln(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD))
  const age = Math.log(MODERN_ACTIVITY / sampleActivityValue) / (0.693 / HALF_LIFE_PERIOD);

  // Округлення результату до найближчого цілого числа
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
