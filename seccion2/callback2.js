
//emplados
let empleados = [{
    id: 1,
    nombre: 'gus'
},{
    id: 2, 
    nombre: 'maru'
},{
    id: 3,
    nombre: 'juan'
}];

// salarios
let salarios =[{
    id:1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {

    let empleadoDb = empleados.find( empleado  => {
        return empleado.id === id;
    });

    if( !empleadoDb){
        callback(`No existe el empleado con el ID ${id}`);
    }else{
        callback(null, empleadoDb);
        
    }

    // console.log(empleadoDb);
    
}

getEmpleado(10, (err, empleado) => {

    if(err){
        console.log(err);
        
    }
    console.log(empleado);
    
});