export const fillSeatsArray = (maxValue: number) => {
  const even = [...Array(maxValue)].reduce((acc, _, i)  => {
    if (i % 2 === 0 && i !== 0) acc.push(i);
    return acc;
  }, []);
  const odd = [...Array(maxValue)].reduce((acc, _, i)  => {
    if (i % 2 !== 0 && i !== 0) acc.push(i);
    return acc;
  }, []);
  return [...even, ...odd];
}
