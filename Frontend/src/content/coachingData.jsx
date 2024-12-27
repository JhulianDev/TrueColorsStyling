import { v4 as uuidv4 } from 'uuid';
import PRESENTACION_IMG from '../assets/images/coaching_de_imagen/presentation_image.png'

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
  }
}