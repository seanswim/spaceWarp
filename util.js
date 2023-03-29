export const randomNumBetween = (min, max) => Math.random() * (max-min +1) + min;

export const colors = [
  '#edecc5',
  'rgb(40,90,173)',
  'rgb(108,221,237)',
  'rgb(20,41,83)',
  'rgb(106,241,245)',
  'rgb(250,253,254)',
  '#ffffff',
];

export const hypotenuse = (x, y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}