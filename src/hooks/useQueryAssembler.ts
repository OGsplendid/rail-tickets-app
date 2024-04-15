import { useAppSelector } from "./redux";

export const useQueryAssembler = () => {
  const { destinationsQuery } = useAppSelector(state => state.railTickets);
  const result = Object.entries(destinationsQuery).map(([key, value]) => {
    if (value) {
      return `${key}=${value}`;
    }
  })
  return result.filter((r) => r).join('&');
}
