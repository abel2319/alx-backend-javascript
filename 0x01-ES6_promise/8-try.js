export default function divideFunction(numerator, denominator) {
  try {
    const val = numerator / denominator;
    if (Number.isFinite(val)) return val;
    throw new Error('cannot divide by 0');
  } catch (error) {
    throw new Error('cannot divide by 0');
  }
}
