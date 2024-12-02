const medicos = [
    {
    nombre2: "Juan Pérez",
    especialidad2: "Cardiología",
    experiencia2: 10,
    disponibilidad2: true,
    contacto2: {
    telefono2: "123456789",
    email2: "juan.perez@hospital.com",
    },
    horarios2: ["Lunes 9-12", "Miércoles 10-14"],
    },
    {
    nombre2: "Ana López",
    especialidad2: "Pediatría",
    experiencia2: 5,
    disponibilidad2: false,
    contacto2: {
    telefono2: "987654321",
    email2: "ana.lopez@hospital.com",
    },
    horarios2: ["Martes 8-13", "Jueves 14-18"],
    },
    ];

    const { nombre2, especialidad2, contacto2: { email2 } } = medicos[0];
console.log(`Doctor: ${nombre2}, Especialidad: ${especialidad2}, Email: ${email2}`);


const divInfo = document.getElementById("doctores2-info");
divInfo.innerHTML = `<h2>${nombre2}</h2><p>Especialidad: ${especialidad2}</p><p>Email: ${email2}</p>`;

const doctorClonado = { ...medicos2[0] };
doctorClonado.nombre2 = "Carlos Gómez";
console.log("Original:", medicos2[0]);
console.log("Clonado:", doctorClonado);

const servicios2 = { cardiología: true, pediatría: true };
const infoCompleta2 = { ...medicos2[0], ...servicios2 };
console.log(infoCompleta2);