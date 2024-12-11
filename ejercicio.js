function fibonacci(n) {
    const secuencia = [0, 1];
  
    for (let i = 2; i < n; i++) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
  
    return secuencia;
  }
  
  // Pedir al usuario el número de elementos
  const cantidadNumeros = prompt("Ingrese la cantidad de números de Fibonacci que desea generar:");
  
  // Convertir la entrada a un número entero
  const cantidad = parseInt(cantidadNumeros);
  
  // Generar la secuencia
  const resultado = fibonacci(cantidad);
  
  // Mostrar el resultado en una alerta
  alert("La secuencia de Fibonacci es: " + resultado);