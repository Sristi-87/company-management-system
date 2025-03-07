export const fetchCompanyData = async () => {
  try {
    const response = await fetch(
      "https://fakerapi.it/api/v1/companies?_quantity=50"
    );

    // if (!response.ok) {
    //   throw new Error(`Request failed with status ${response.status}`);
    // }

    const responseData = await response.json();
    console.log( responseData?.data,"today")
    const companies = responseData?.data ?? [];
    return companies;
  } catch (error) {
    console.error("Error fetching company data:", error);
    return [];
  }
};
