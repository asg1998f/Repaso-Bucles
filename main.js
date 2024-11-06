let personas = [
    { nombre: "Carlos", edad: 25, profesion: "Ingeniero" },      
    { nombre: "Lucía", edad: 19, profesion: "Estudiante" },      
    { nombre: "Martín", edad: 30, profesion: "Doctor" },          
    { nombre: "Ana", edad: 22, profesion: "Diseñadora" },        
    { nombre: "Elena", edad: 35, profesion: "Arquitecta" },      
    { nombre: "Pedro", edad: 40, profesion: "Carpintero" },      
    { nombre: "Marta", edad: 27, profesion: "Profesora" },        
    { nombre: "Diego", edad: 31, profesion: "Abogado" },        
    { nombre: "Sofía", edad: 23, profesion: "Programadora" },    
    { nombre: "Andrés", edad: 28, profesion: "Ingeniero" },      
    { nombre: "Valeria", edad: 26, profesion: "Nutricionista" },  
    { nombre: "Laura", edad: 20, profesion: "Estudiante" },      
    { nombre: "Juan", edad: 33, profesion: "Chef" },              
    { nombre: "Gabriela", edad: 24, profesion: "Enfermera" },    
    { nombre: "Roberto", edad: 29, profesion: "Músico" },        
    { nombre: "Paula", edad: 38, profesion: "Arquitecta" },      
    { nombre: "Miguel", edad: 21, profesion: "Doctor" },          
  ];

/* Crea un array con las personas mayores de 30 años que sean doctores o arquitectos.*/
let mayores30YDoctorOArquitecto = [];
personas.forEach(persona => { 
    if(persona.edad > 30 && (persona.profesion === "Doctor"||persona.profesion ==="Arquitecta")){
        mayores30YDoctorOArquitecto.push(persona)
    }
});
/* console.log(mayores30YDoctorOArquitecto) */

/*Crea un array con las personas cuyo nombre empieza con "M" y son menores de 28 años.*/
let empiezaMmenor28 = []
personas.forEach(persona => {
    if(persona.nombre.charAt(0) === "M" && persona.edad < 28)
        empiezaMmenor28.push(persona)
});
/* console.log(empiezaMmenor28); */

/*Crea un array con las personas que son ingenieros o diseñadores y tienen una edad impar.*/
let ingenieroDiseñadorImpar = []
personas.forEach(persona => {
    if((persona.profesion === "Ingeniero" || persona.profesion === "Diseñadora") && persona.edad % 2 === 1){
        ingenieroDiseñadorImpar.push(persona)
    }
});
/* console.log(ingenieroDiseñadorImpar) */

/*Crea un array con las personas que tienen una profesión que empieza por "P" y cuya edad es mayor o igual a 25.*/
let profesionPedad25 = []
personas.forEach(persona => {
    if(persona.profesion.charAt(0) === "P" && persona.edad >= 25){
        profesionPedad25.push(persona)
    }
});
/* console.log(profesionPedad25); */

/*Crea un array con las personas cuyo nombre tenga más de 5 letras y cuya profesión sea estudiante o doctor.*/

let nombre5LetrasEstODoc = []
personas.forEach(persona => {
    if(persona.nombre.length > 5 && (persona.profesion === "Estudiante" || persona.profesion === "Doctor"))
        nombre5LetrasEstODoc.push(persona)
});
console.log(nombre5LetrasEstODoc)




  