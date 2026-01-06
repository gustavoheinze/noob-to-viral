const gameData = {
    gaming: [
        { t: "Ranked Perdida", d: "Bajaste de rango. Tus amigos te llaman 'el ancla' del equipo.", f: "Soy un manco, nunca seré pro.", g: "Debo grindear más puntería." },
        { t: "Error en Torneo", d: "Fallaste el tiro decisivo frente a todo el público local.", f: "No sirvo bajo presión.", g: "Aún no controlo mis nervios." },
        { t: "Nerfeo de Main", d: "Tu personaje favorito ahora es débil tras el parche.", f: "Se acabó mi ventaja, ya no ganaré.", g: "Es hora de aprender un nuevo meta." },
        { t: "Lag Brutal", d: "Perdiste una final por un pico de lag repentino.", f: "Maldita suerte, no puedo avanzar.", g: "Pasa incluso a los mejores. Seguimos." },
        { t: "Burnout Pro", d: "Llevas 12 horas jugando y ya no coordinas bien.", f: "He perdido mi nivel.", g: "El descanso también es entrenamiento." },
        { t: "Equipo Disuelto", d: "Nadie quiere jugar contigo hoy, te sientes excluido.", f: "No soy lo suficientemente bueno.", g: "Practicaré solo para mejorar mi elo." },
        { t: "Hardstuck Oro", d: "Llevas meses en el mismo rango. Sientes que es tu techo.", f: "Aquí termina mi camino.", g: "Necesito cambiar mi rutina de entreno." },
        { t: "Streamer se burla", d: "Un pro reacciona a tu jugada y dice que eres mediocre.", f: "Qué vergüenza, borraré el juego.", g: "Sus críticas son datos para mejorar." },
        { t: "Final Nacional", d: "Estás frente a la pantalla más grande de tu vida. Sudas frío.", f: "Seguro haré el ridículo.", g: "Acepto el reto, gane o aprenda." },
        { t: "Crítica masiva", d: "Dicen que tu victoria fue 'suerte'.", f: "Tienen razón, no me lo merezco.", g: "Mi consistencia hablará por mí mañana." },
        { t: "Hardware Fallido", d: "Tu mouse falla en plena partida importante.", f: "Es mi mala suerte, no puedo ganar así.", g: "Compraré repuestos y seguiré." },
        { t: "Toxicidad en Chat", d: "Te insultan sin razón en una partida casual.", f: "Son todos unos tóxicos, no juego más.", g: "Bloqueo y sigo enfocado en mi meta." },
        { t: "Cambio de Equipo", d: "Tu mejor compañero se va a otro team rival.", f: "Me traicionó, ya no ganaré solo.", g: "Oportunidad para liderar y buscar nuevos talentos." },
        { t: "Error de Comunicación", d: "Hiciste una jugada distinta a la planeada por error.", f: "Arruiné todo para el equipo.", g: "Repasaremos señales y mejoraremos el teamplay." },
        { t: "Falta de Patrocinio", d: "Una marca dice que no tienes suficiente alcance aún.", f: "Nunca seré profesional.", g: "Mejoraré mis números y volveré con más fuerza." },
        { t: "Lesión Leve", d: "Te duele la muñeca tras mucho jugar.", f: "Se acabó mi carrera.", g: "Haré estiramientos, reposo y volveré más fuerte." },
        { t: "Nuevo Juego", d: "Sale un juego nuevo y todos tus rivales ya son buenos.", f: "No podré alcanzarlos.", g: "Analizaré sus jugadas para aprender más rápido." },
        { t: "Error de Software", d: "El juego se cierra en tu mejor racha.", f: "El mundo está en mi contra.", g: "Reportaré el bug y volveré a empezar con calma." },
        { t: "Falta de Apoyo", d: "Tu entorno dice que jugar es perder el tiempo.", f: "Tienen razón, nunca llegaré.", g: "Demostraré con resultados mi dedicación." },
        { t: "El Peak Mental", d: "Sientes que ya llegaste a tu máximo nivel.", f: "Ya no puedo mejorar más.", g: "Buscaré un coach para romper mi techo." }
    ],
    social: [
        { t: "Shadowban", d: "Tus views bajaron a cero de la noche a la mañana.", f: "El algoritmo me odia, me retiro.", g: "Estudiaré qué tendencias hay hoy." },
        { t: "Comentario Hater", d: "Un hater dijo que tu video es 'cringe' y tiene 10k likes.", f: "Soy una vergüenza pública.", g: "No me define un comentario ajeno." },
        { t: "Copia de Video", d: "Un influencer grande te robó la idea y se hizo viral.", f: "Nadie verá mi video original ya.", g: "Significa que mi talento es real." },
        { t: "Fallo de Audio", d: "Tu mejor video se grabó sin sonido por error.", f: "Soy un inútil con la tecnología.", g: "Aprenderé a revisar dos veces." },
        { t: "Menos Followers", d: "Perdiste 500 seguidores hoy sin razón aparente.", f: "He dejado de gustar.", g: "Filtrando a los que no conectan realmente." },
        { t: "Rechazo de Sponsor", d: "La marca que querías te dijo que no eres profesional.", f: "Nunca seré alguien importante.", g: "Aún no tengo el perfil, pero lo tendré." },
        { t: "Envidia Pura", d: "Ves a alguien crecer 10 veces más rápido que tú.", f: "Él tiene suerte, yo no tengo futuro.", g: "Le pediré consejos para crecer yo también." },
        { t: "Falta de Ideas", d: "Página en blanco. Llevas 3 días sin subir nada.", f: "Mi creatividad se esfumó.", g: "Consumiré arte nuevo para inspirarme." },
        { t: "Cancelado", d: "Te juzgan por algo que hiciste hace años.", f: "Mi carrera ha terminado.", g: "Pediré disculpas y mostraré mi cambio real." },
        { t: "Miedo al Exito", d: "Te invitan a un podcast importante y tienes pánico.", f: "Diré que estoy enfermo.", g: "Es la oportunidad de subir de nivel." },
        { t: "Error de Upload", d: "Borraste el archivo original por accidente.", f: "No sirvo para esto, tiro la toalla.", g: "Lo grabaré de nuevo y quedará aún mejor." },
        { t: "Haters Organizados", d: "Te caen cientos de bots insultando.", f: "Voy a cerrar mi cuenta ahora mismo.", g: "Ignoro el ruido y cuido a mi comunidad real." },
        { t: "Desactualización", d: "Las tendencias cambiaron y no te diste cuenta.", f: "Pasé de moda, ya fue.", g: "Voy a investigar las nuevas tendencias ya." },
        { t: "Falta de Equipo", d: "Tu cámara se rompió y debes usar el celular.", f: "Se ve horrible, no subiré nada.", g: "Iluminación es más importante que la cámara." },
        { t: "Mala Colaboración", d: "El otro creador no hizo su parte del trabajo.", f: "No haré más colaboraciones.", g: "Aprenderé a elegir mejor mis socios futuros." },
        { t: "Burnout Creativo", d: "Te sientes vacío tras un mes intenso de subir contenido.", f: "Ya no tengo talento creativo.", g: "Un descanso me dará el aire que necesito." },
        { t: "Crítica Constructiva", d: "Un profesional te dice que tus videos son lentos.", f: "Soy malo editando.", g: "Veré tutoriales para mejorar mi ritmo." },
        { t: "Copyright Strike", d: "Te desmonetizaron el video más visto.", f: "Perdí todo mi esfuerzo.", g: "Apelaré y usaré música libre la próxima vez." },
        { t: "Poca Repercusión", d: "Subes tu mejor obra y casi no tiene impacto.", f: "No le intereso a nadie.", g: "Revisaré el horario y el título del video." },
        { t: "Comparación Letal", d: "Miras las estadísticas de tu rival y son mejores.", f: "Soy inferior y nunca los alcanzaré.", g: "Sus métricas me sirven de inspiración y guía." }
    ],
    quotes: [
        { text: "No he fracasado. He encontrado 10.000 formas que no funcionan.", author: "Thomas Edison" },
        { text: "La única vez que fallas es cuando dejas de intentarlo.", author: "Albert Einstein" },
        { text: "No importa lo lento que vayas, siempre y cuando no te detengas.", author: "Confucio" },
        { text: "El éxito es la capacidad de ir de fracaso en fracaso sin perder el entusiasmo.", author: "Winston Churchill" },
        { text: "Tu talento te lleva a la cima, pero tu carácter te mantiene allí.", author: "John Wooden" },
        { text: "Ganar no lo es todo, pero el esfuerzo para ganar sí lo es.", author: "Vince Lombardi" },
        { text: "Los errores son el portal del descubrimiento.", author: "James Joyce" },
        { text: "Todo parece imposible hasta que se hace.", author: "Nelson Mandela" },
        { text: "Céntrate en el proceso, no en el resultado.", author: "James Clear" },
        { text: "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.", author: "John Wooden" }
    ],
    profiles: {
        static: {
            title: "NPC DE TU PROPIA VIDA",
            analysis: "Te quedaste en modo espectador. Evitar el riesgo es el camino más rápido al estancamiento. En el mundo real, no intentar nada es el error más grande que puedes cometer. ¡Sal de la zona de confort!"
        },
        transition: {
            title: "PLAYER EN NIVELACIÓN",
            analysis: "Tienes destellos de valentía, pero la duda todavía te frena. Estás aprendiendo que fallar no es el fin del mundo, sino un 'checkpoint'. ¡Sigue eligiendo el reto, ahí es donde subes de elo!"
        },
        warrior: {
            title: "GUERRERO RESILIENTE",
            analysis: "¡Gran actitud! No te importó fallar en los minijuegos porque tu mentalidad era la correcta: intentarlo siempre. Con ese enfoque, es cuestión de tiempo que domines cualquier habilidad."
        },
        master: {
            title: "MAESTRO DEL AÚN",
            analysis: "Nivel Dios. Entiendes que 'no poder' significa 'no poder... TODAVÍA'. Combinas una mentalidad de acero con una ejecución impecable. Estás listo para romper cualquier algoritmo o liga pro."
        }
    }
};
