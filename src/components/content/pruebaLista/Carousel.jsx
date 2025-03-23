import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';
import ProductCard from '../productCard/ProductCard';
import './Carousel.css';
import { useFetchMovies } from '../../../hooks/useFetchMovies';

function Carousel({ title, category }) {
    const { movies, loading } = useFetchMovies(category);

    if (loading) return <p>Cargando {title}...</p>;
    if (!movies.length) return <p>No hay resultados para {title}</p>;
    
    return (
        <>
            <h2 className="carousel-title">{title}</h2>
            <Swiper
                modules={[Navigation]}
                navigation 
                spaceBetween={15}
                slidesPerView={5} 
                slidesPerGroup={5}      
                loop={false}
                className="carouselSwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="carousel-movie-card">            
                        <ProductCard id={movie.id} type="movie" />         
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

Carousel.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default Carousel;