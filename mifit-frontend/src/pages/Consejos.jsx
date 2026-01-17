import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/consejos.css'
import '../styles/estilos-estructurales.css'
export const Consejos = () =>{
    const consejos = [

    ]
    return(
        <div className="Consejos-container">
            <h1 className="titulo">16 Consejos para mejorar el entrenamiento</h1>
            <h3 className="subtitulo">1. Empieza progresivamente</h3>
            <p className="texto">Es muy normal que siendo principiante uno se motive por la novedad, emoción etc. Pero lo más importante es no sobrecargarse desde el principio.Comienza con ejercicios sencillos y aumenta cargas poco a poco. Es muy importante este punto porque siendo principiante no se tiene la técnica desarrollada y se puede cometer errores y lesionarse.</p>
            <h3 className="subtitulo">2.Prueba el entrenamiento de resistencia.</h3>
            <p className="texto">El entrenamiento de fuerza es muy importante, pero acompañado con entrenamiento de resistencia es la combinación perfecta para mejorar nuestra salud. 
                A diferencia de los mitos, con el entrenamiento de resistencia no se pierde las ganancias musculares. De echo, todo al contrario, puede favorer la ganancia de músculo además de acelerar el metabolismo  </p>
            <h3 className="subtitulo">3.Flexibilidad horaria</h3>
            <p className="texto">A veces surgen imprevistos que pueden afectar a nuestro programa de entrenamiento. No pasa nada si cambias la hora o el día de tu entrenamiento. Si te ha surgido un imprevisto y no puedes entrenar a la misma hora de todos los días o no tienes tiempo para realizar un entrenamiento completo, intenta entrenar a otra hora o hacerlo en varias veces a lo largo del día.</p>
            <h3 className="subtitulo">4.Mantente hidratado</h3>
            <p className="texto">La hidratación es fundamental durante el entrenamiento. Bebe agua antes, durante y después de tu rutina. La deshidratación puede afectar negativamente el rendimiento y causar fatiga.</p>
            <h3 className="subtitulo">5.Escucha tu cuerpo</h3>
            <p className="texto">Escuchar tu cuerpo no es una acción fácil aunque lo parezca. Muchas veces se sobreestima la capacidad de recuperación y se entrena en exceso. Es por eso que es importante la reflexión y conocer su cuerpo para no sobrecargar.</p>
            <h3 className="subtitulo">6.Ejercicios de movilidad y estiramientos</h3>
            <p className="texto">Los ejercicios de movilidad y estiramientos son los gran olvidados por muchos. Incluirlos en la rutina mejora la preparación del cuerpo y evita lesiones. Un estudio publicado en Current Sports Medicine demostró que los ejercicios dinámicos de movilidad antes de entrenar y los estiramientos estáticos después de entrenar pueden ayudar a aumentar el rendimiento y mejorar la recuperación. </p>
            <h3 className="subtitulo">7.Establece objetivos realistas</h3>
            <p className="texto">Está bien soñar a lo lo grande pero es importante ser autocrítico y establecer objetivos realistas para mantener la motivación. Establecer objetivos inalcanzables puede llevar a la frustración y al abandono del entrenamiento.</p>
            <h3 className="subtitulo">8.Duerme suficiente</h3>
            <p className="texto">El sueño es fundamental para la recuperación y el rendimiento. Asegúrate de dormir entre 7 y 9 horas cada noche para mantener tu cuerpo en óptimas condiciones.</p>
            <h3 className="subtitulo">9. Conexión cuerpo-mente</h3>
            <p className="texto">La conexión cuerpo-mente es una herramienta poderosa para mejorar el rendimiento y la salud general.Muchas veces se hacen los ejercicios sin pensar en el músculo que estamos trabajando. Una mayor conexión entre músculo y mente mejora los resultados de ganancias musculares.</p>
            <h3 className="subtitulo">10. No subestimes la dieta</h3>
            <p className="texto">Una dieta equilibrada, sin restricciones extremas pero con buenas opciones alimentarias es clave para el rendimeinto. La comida es nuestra gasolina y lo que nos da energía. Por tanto si quieres rendir en el gimnasio, debes alimentarte bien y sin restricciones.</p>
            <h3 className="subtitulo">11.Date una recompensa</h3>
            <p className="texto">Una recompensa puede ser una forma de motivación para seguir entrenando. Puede ser algo sencillo como unas palomitas en el cine, un postre o una pizza. La recompensa no tiene por qué ser algo caro, lo importante es que sea significativa para ti.</p>
            <h3 className="subtitulo">12. Siéntete cómodo con lo que llevas puesto</h3>
            <p className="texto"> Parece una tontería pero es importante vestir con ropa cómoda y que te estilize. La ropa puede ser también una motivación para entrenar. Cualquier motivación es muy buena porque te ayudará con el proceso de entrenamiento.</p>
            <h3 className="subtitulo">13. No te compares con otros</h3>
            <p className="texto">Cada persona es diferente y tiene su propio ritmo de progreso. No te compares con otros, enfócate en tu propio progreso y los resultados llegarán solos.</p>
            <h3 className="subtitulo">14.Sigue una rutina estructurada</h3>
            <p className="texto">Una rutina estructurada es fundamental para conseguir resultados. Establece una rutina que te permita mantener un hábito constante y lograr tus objetivos. </p>
            <h3 className="subtitulo">15.Alimentación post-entreno</h3>
            <p className="texto">La pérdida de líquidos y el agotamiento de las reservas de energía durante el entrenamiento hacen que el cuerpo necesite reponerlos después del ejercicio. Beber agua es una forma estupenda de rehidratarse y reponer los líquidos perdidos. El consumo de carbohidratos ayudará a la recuperación muscular y a reponer el glucógeno muscular, además de optimizar la reparación y el crecimiento muscular.</p>
            <h3 className="subtitulo">16.Ejercicios básicos</h3>
            <p className="texto">Muchas veces los ejercicios básicos son lo mejor(menos es mas). Ejercicios básicos multiarticulares como la sentadilla, press banca...permite trabajar múltiples grupos musculares al mismo tiempo. </p>
        </div>
    )
}