export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://staging-api.erpxbd.com/api/v1/users"
  );
};
