

const persona={

nombre: "tony",
apellido: "stark",
edad: 45, 
direccion:{
    ciudad:"new york",
    zip: 5484765,
    lat: 14.54478,
    lng: 25.54847,
}
};

// console.table ( persona );

const persona2 = {...persona};
persona2.nombre ="peter";


console.log(persona2)
console.log ( persona );