const benderQuotes = [
    "¡¡Leela, sálvame!!… ¡Bueno, y a ti también!… ¡Y a mí banjo!… bueno, y a Fry… ¡Bender es genial!",
    "¡Díselo a mi brillante trasero metálico!",
    "¡El mundo moderno puede morder mi trasero de madera astillada!",
    "¡Maldito abrelatas! ¡Mataste a mi padre y ahora has venido a por mí!",
    "¡Matar a todos los humanos!",
    "¡Muérase usted, viejo!",
    "¡Besa mi brillante trasero metálico!",
    "¡Que horrible pesadilla! ¡Unos y ceros por todas partes! Hasta me pareció ver un 2.",
    "¡Si alguien pregunta, eres mi desprogramador, no quiero que piensen que somos Robotsexuales!",
    "¡Soy Bender primor, por favor inserta Licor!",
    "¡Tienes fiebre de metal muchacho, fiebre de metal!",
    "¿Han probado alguna vez a apagar la tele, sentarse con sus hijos y darles una paliza?",
    "¿Qué clase de fiesta es esta? ¡No hay alcohol y solo se ve una furcia!",
    "Abogada soltera lucha por su cliente, usa minifalda y es independiente… ¡wow, que bueno soy!",
    "Ahh, ¿no hay sitio para Bender, ¿eh? Vale, me construiré mi propio módulo lunar, con casinos, y furcias. Es más, paso de la nave lunar… y de los casinos. ¡Al cuerno todo!",
    "Chantaje es una palabra muy fea, yo prefiero… extorsión, la X le da mucha clase.",
    "Chicos, es peor de lo que pensaba… ¡Mi pez se ha escapado!",
    "Descubre quién te descubrió descubriendo el significado de la palabra descubrió.",
    "Fry, de todos los amigos que he tenido, tú… eres el único",
    "Te juro que es cierto, tengo a tu Dios como mi testigo",
    "El cuerpo es para las furcias y los tios gordos, yo solo necesito pasta alrededor de mi cabeza",
    "Llámame anticuado, pero me gusta que un abandono sea tan imprevisto como cruel",
    "No quiero morir, todavía hay muchas cosas que no tengo",
    "Bueno... Estoy harto de este camarote y de los que hay en él. Si me disculpais, estaré en el casino durante las próximas 135 horas",
    "Me vas a chupar la carcasa de atrás",
    "¡Una ranita iba caminando, aha, aha! ¡Una ranita iba caminando y blablablá Bender es genial!"
];

const showQuote = () => {
    const quote = benderQuotes[Math.floor(Math.random() * benderQuotes.length)];
    console.log((`\x1b[36m${quote}\x1b[89m`));
}

module.exports = {
    showQuote
};