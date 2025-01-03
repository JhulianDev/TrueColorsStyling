import { v4 as uuidv4 } from 'uuid';
import PRESENTACION_IMG from '../assets/images/coaching_de_imagen/presentation_image.png'
import ABOUTME_IMG from '../assets/images/coaching_de_imagen/benefits_image.png'
import STEPS_IMG from '../assets/images/coaching_de_imagen/steps_image.png'

export const data = {
  hero: {
  },
  presentation: {
    img: PRESENTACION_IMG,
    border: false,
    imageFirst: false,
    paragraph1: (
      <>
        En nuestro <b className='text-greenIntense-100'>Método Ilumina tu imagen en 5 Pasos</b>, te acompañamos a descubrir el estilo que mejor refleja tu personalidad y resalta tu belleza natural.
      </>
    ),
    subtitle: "Por eso en true colors styling:",
    paragraph2: (
      <>
        <b>ENTENDEMOS QUE CADA PERSONA ES ÚNICA, POR ESO NUESTRO ENFOQUE ES TOTALMENTE PERSONALIZADO</b> basado en el Método Ilumina Tu Imagen; 5 pasos para una Imagen Plena y Total
      </>
    ),
    paragraph3: (
      <>
        Trabajamos contigo para crear una <b>imagen auténtica y segura</b>, que te haga sentir bien en <b>cada aspecto de tu vida.</b>
      </>
    ),
  },
  benefits: {
    img: ABOUTME_IMG,
    title: "Este servicio es para ti:",
    items: [
      {
        id: uuidv4(),
        text: (
          <>
            Si lo que quieres es desde el autoconocimiento <b className='text-greenIntense-100'>DESCUBRIR Y DEFINIR TU ESTILO PERSONAL:</b> que refleje completamente a la persona que eres hoy y te haga sentir segura y confiada.
          </>
        )
      },
      {
        id: uuidv4(),
        text: (
          <>
            Si quieres aprender a <b className='text-greenIntense-100'>RESALTAR TU BELLEZA Y ENCANTO NATURAL:</b> Entendiendo las prendas y las formas de las mismas que sacan los mejor de ti y muestran tus mejores atributos.
          </>
        )
      },
      {
        id: uuidv4(),
        text: (
          <>
            Si lo que buscas es <b className='text-greenIntense-100'>AUMENTAR TU CONFIANZA:</b> Al vestirte con seguridad sabiendo como y con que puedes sacarte más partido.
          </>
        )
      },
      {
        id: uuidv4(),
        text: (
          <>
            Si lo que buscas es <b className='text-greenIntense-100'>OPTIMIZAR TU CLOSET:</b> Construyendo un closet funcional y versátil, lleno de prendas que realmente te encanten y te hagan sentir bien.
          </>
        )
      },
      {
        id: uuidv4(),
        text: (
          <>
            Si lo que buscas es <b className='text-greenIntense-100'>AHORRAR TIEMPO Y ESFUERZO:</b> Simplificando tu rutina diaria de vestirte con un estilo claro y bien definido, evitando las dudas y la sensación de abrumo que puede generar un closet.
          </>
        )
      },
      {
        id: uuidv4(),
        text: (
          <>
            Si lo que buscas es una <b className='text-greenIntense-100'>ASESORÍA PERSONALIZADA:</b> Disfruta de un enfoque 100% adaptado a tus necesidades, gustos y objetivos personales.
          </>
        )
      }
    ]
  },
  steps: {
    title: "Proceso de trabajo",
    img: STEPS_IMG,
    paragraph1: (
      <>
        Todos los servicios están diseñados para <span className='font-extrabold'>adaptarse a tus necesidades</span> y pueden llevarse a cabo en formato <span className='font-extrabold'>presencial, online</span> o incluso en <span className='font-extrabold'>formato híbrido.</span>
      </>
    ),
    paragraph2: (
      <>
        Para todos los servicios, podemos programar una <span className='font-extrabold'>sesión previa de consulta en línea</span> para comprender en detalle de qué trata cada uno, los tiempos involucrados y <span className='font-extrabold'>los resultados que deseamos alcanzar.</span>
      </>
    )
  },
  packs: [
    {
      id: uuidv4(),
      title: "Método Ilumina Tu Imagen",
      tag: "Para Mujeres",
      paragraph1: (
        <>
          Esta asesoría consta de 4 etapas en las cuales trabajamos <span className='font-extrabold'>Colorimetría, Estilo, Silueta, Detox de Closet.</span>
        </>
      ),
      paragraph2: (
        <>
          Para mayor información, agenda una reunión online de <span className='font-extrabold'>15 minutos</span> donde te explico de que se trata <span className='font-extrabold'>todo el programa.</span>
        </>
      ),
      url: "/"
    },
    {
      id: uuidv4(),
      title: "Método Closet Ya",
      tag: "Para Hombres",
      paragraph1: (
        <>
          Asesoría de <span className='font-extrabold'>2 etapas</span> donde trabajamos <span className='font-extrabold'>tu estilo de vida y de vestir actual</span>, revisamos tus <span className='font-extrabold'>colores ideales</span> y diagnosticamos las necesidades <span className='font-extrabold'>para llegar al estilo deseado</span>
        </>
      ),
      paragraph2: (
        <>
          Generamos un <span className='font-extrabold'>plan de acción</span> y en dos etapas cuentas con tu estilo ideal <span className='font-extrabold'>en tu casa.</span>
        </>
      ),
      url: "/"
    }
  ]
}