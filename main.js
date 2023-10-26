
//calculadora de neutones de fuerza
function multiplicar() {
    let expresion = prompt("Ingrese la multiplicaion colocando primero la velocidad en km por hora y luego la masa en kg (por ejemplo, 120 * 50):")
    
    if (expresion) {
      try  {
            const resultado = eval(expresion);
            alert(`la cantidad de neutones de fuerza son: ${resultado}`);
        } catch (error) {
            alert("no se puede calcular la fuerza.");
        }
    }
}
    multiplicar();

