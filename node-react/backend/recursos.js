module.exports = {
    mascotas: [
            {tipo: "Perro", nombre: "Andy0", propietario: "Vince"},
            {tipo: "Perro", nombre: "Andy1", propietario: "Vince"},
            {tipo: "Perro", nombre: "Andy2", propietario: "Vince"},
            {tipo: "Perro", nombre: "Andy3", propietario: "Vince"},
            {tipo: "Perro", nombre: "Andy4", propietario: "Vince"},
    ],
    veterinarios: [
        {nombre: "Juanito", apellido:"Hernandez", documento:"1234567890"},
        {nombre: "Ale", apellido:"Muñoz", documento:"1234777790"},
        {nombre: "Fer", apellido:"Triana", documento:"1233333333"},
        {nombre: "Vero", apellido:"Silva", documento:"00000067890"},
        {nombre: "Vince", apellido:"Gonzalez", documento:"111111111111"},
],
propietarios: [
    {nombre: "Juan", apellido:"fernandez", documento:"8888887890"},
    {nombre: "Alejandra", apellido:"Muñoz", documento:"1112233344"},
    {nombre: "Monica", apellido:"Rangel", documento:"999887776665"},
    {nombre: "Rafa", apellido:"Juarez", documento:"443433340"},
    {nombre: "Earl", apellido:"Gonzalez", documento:"00008765"},
],
consultas: [
    {
        mascota:0, 
        veterinario: 0,
        fechaCreacion: new Date(),
        fechaEdicion: new Date(),
        historia: "",
        diagnostico: "diagnostico",
    },
],
};
