function saludar(nombre) {
    let mensaje = `hola ${ nombre }`
    return mensaje;
}

let saludo = saludar('Gus');

console.log(saludo)