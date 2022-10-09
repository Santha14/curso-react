
const saludar = function (nombre ){
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola,  ${ nombre }`;
}

const saludar3 = ( nombre ) =>  
     `Hola,  ${ nombre }`;

const saludar4 = ( ) =>  
     `Hola mundo`;


console.log ( saludar3   (`goku`))

console.log ( saludar2 (`Vegeta`));

console.log ( saludar4 () );


const getUser = () => 
( {
    uid:`ABC123 `,
    username: `sapo123`
})

const user = getUser ();
console.log (user);


// T A R E A 

// function getUsuarioActivo ( nombre ){
//     return {
//         uid: `Abc234`,  
//         username: nombre
//     }
// };

const getUsuarioActivo = ( nombre ) =>
     ({
        uid: `Abc234`,  
        username: nombre
    })
;

const usuarioActivo = getUsuarioActivo(`Emmanuel`);
console.log (usuarioActivo);