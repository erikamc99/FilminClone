import { Suspense, use } from 'react';
import Slider from './slider/Slider';
import Carousel from './pruebaLista/Carousel';

function Content() {
  return (
    <>
      <Slider />
      <Suspense fallback={<p>Cargando...</p>}>
        <Carousel title="Maravillas para Ver con los Peques" category="family" />
        <Carousel title="Cine de Animación" category="animated" />
        <Carousel title="Historias de Amor" category="romantic" />
      </Suspense>
    </>
  );
}

export default Content;