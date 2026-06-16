export const formatNumber = (num, lang) => {
  if (lang !== 'ar') return num;
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(num).replace(/[0-9]/g, w => arabicNumbers[w]);
};
