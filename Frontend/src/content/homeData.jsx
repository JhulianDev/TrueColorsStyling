import PRESENTACION_IMG from '../assets/images/home/presentacion_image.png'

export const data = {
  hero: {
  },
  presentation: {
    img: PRESENTACION_IMG,
    border: true,
    imageFirst: true,
    paragraph1: (
      <>
        Sabemos que encontrar <b className='text-greenIntense-100'>un estilo que refleje tu verdadera esencia y te haga sentir segura</b> puede ser un desafío. Es común sentirse abrumada por las opciones y desanimada cuando la ropa en tu closet no te representa.
      </>
    ),
    subtititle: "Por eso en true colors styling:",
    paragraph2: (
      <>
        Te ayudamos a <b>superar esas barreras</b>, guiándote y acompañándote en cada paso para descubrir los colores y estilos que <b>mejor te quedan</b>.
      </>
    ),
    paragraph3: (
      <>
        Junt@s, trabajamos y creamos un estilo que no solo te encante, sino que también <b>fortalezca tu confianza y te haga sentir auténtic@</b> en cualquier situación.
      </>
    ),
  },
  newsletter: {
    typeNewsletter: true,
    typeCTA: false,
    bgColor: 'bg-greenLight-100',
    url: "/",
    title: (
      <>
        <span className='text-greenIntense-100'>Tu imagen ideal</span> está a solo un email de distancia
      </>
    ),
    paragraph: (
      <>
        <span className='text-greenIntense-100'>Suscríbete a mí newsletter</span> y descubre cómo<span className='text-greenIntense-100'>resaltar tu belleza</span> interior cada día.
      </>
    )
  }
}