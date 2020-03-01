


// setTimeout( () => {
//     console.log('holaaaa');
    
// }, 3000);

let getUsuarioById = ( id, callback ) => {
    
    let usuario = {
        nombre: 'Gus',
        id: id
    }

    if( id === 10){
        callback(`El usuario con id ${id}, no existe`);
    }else{
        callback(null, usuario);
    }

}

getUsuarioById(10, (err, usuario) =>{

    if(err){
        return console.log(err);
        
    }
    console.log('usuario de base', usuario);
    
})