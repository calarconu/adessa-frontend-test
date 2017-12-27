export const obtenerTotal = num => {
  let suma = 0;
  num.forEach((val) => {
    suma += val.precio;
  });

  return suma;
}
