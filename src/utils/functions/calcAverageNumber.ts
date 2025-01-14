export function calcAverageNumber(arr: number[]) {
  return Number((arr.reduce((acc, itm) => acc + itm, 0) / arr.length).toFixed(0)) || 0;
}
