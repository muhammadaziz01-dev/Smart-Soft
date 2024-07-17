import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './styles.scss';
import { EffectCoverflow, Navigation } from 'swiper/modules';

export default function App() {
  const iframeRefs = useRef([]);

  const handleIframeClick = (index) => {
    iframeRefs.current.forEach((iframe, idx) => {
      if (index !== idx && iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  };

  const videos = [
    { id: 'M7lc1UVf-VE', name: 'Mike', title: 'Fashion Director' },
    { id: 'sBws8MSXN7A', name: 'Samite', title: 'Designer' },
    { id: 'ScMzIvxBSi4', name: 'Kaity', title: 'Fashion Director' },
    { id: 'K4TOrB7at0Y', name: 'Oakes', title: 'Photographer' },
    { id: 'aqz-KE-bpKQ', name: 'Lauren', title: 'Model' },
    { id: '9bZkp7q19f0', name: 'Ryan', title: 'Stylist' },
  ];

  return (
    <div id="app">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-60}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-slide" onClick={() => handleIframeClick(index)}>
              <img src={`https://img.youtube.com/vi/${video.id}/0.jpg`} alt={video.name} />
              <div className="video-overlay">
                <h3>{video.name}</h3>
                <p>{video.title}</p>
                <button className="play-button">▶️</button>
              </div>
              <iframe
                ref={(el) => (iframeRefs.current[index] = el)}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
