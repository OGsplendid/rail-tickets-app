import { useAppSelector } from "./redux"

export const useSeatsDefiner = () => {
    const { destinationsQuery } = useAppSelector(state => state.railTickets);

    const result = Object.entries(destinationsQuery).map(([key, value]) => {
        if (value && key.includes('have')) {
            return `${key}=${value}`;
        }
    });
    return result.filter((r) => r).join('&');
}
