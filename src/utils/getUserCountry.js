export const getUserCountry = async (countryOptions, defaultCountry) => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    // Find matching country
    const userCountry = countryOptions.find(
      (c) => c.code === data.country_code
    );

    return userCountry || defaultCountry; // Return detected country or default
  } catch (error) {
    console.error("Error fetching country:", error);
    return defaultCountry; // Return default if fetch fails
  }
};
