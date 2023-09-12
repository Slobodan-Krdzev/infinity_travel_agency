export const handleSearch = (query: string) => {
    router.push({
      pathname: `/destinacii/${query}/Apartment`,
    });
  };