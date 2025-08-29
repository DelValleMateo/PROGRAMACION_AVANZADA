// metodos en arrays

const personas = [
    { nombre: 'Juan', edad: 25, aprendiendo: 'javascript' },
    { nombre: 'Ana', edad: 30, aprendiendo: 'python' },
    { nombre: 'Pedro', edad: 28, aprendiendo: 'java' },
    { nombre: 'Luis', edad: 32, aprendiendo: 'c++' },
    { nombre: 'Maria', edad: 26, aprendiendo: 'javascript' },
    { nombre: 'Ana', edad: 29, aprendiendo: 'php' }

];

console.log(personas);

// funcion para filtrar > de 28 años

const mayores = personas.filter(persona => persona.edad >= 28);

console.log(mayores);

const ana = personas.find(persona => persona.nombre === 'Ana');
console.log(ana);

const personas2 = [
    { nombre: 'Juani', edad: 25, aprendiendo: 'javascript' },
    { nombre: 'Anaclara', edad: 30, aprendiendo: 'python' },
    { nombre: 'Pablo', edad: 28, aprendiendo: 'java' },
    { nombre: 'Luisa', edad: 32, aprendiendo: 'c++' },
    { nombre: 'Mariano', edad: 26, aprendiendo: 'javascript' },
    { nombre: 'Anastacia', edad: 29, aprendiendo: 'php' }

];

const ambasArrays = personas.concat(personas2).filter(persona => persona.edad >= 28);

console.log(ambasArrays);

