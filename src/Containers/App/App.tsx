import './app.scss';
import { useEffect, useState } from 'react';
import assetMapping from '../../assets/assetMapping.json';

import Card from '../../Elements/Card/Card';
import Header from '../../Components/Header/Header';
import Preview from '../../Components/Preview/Preview';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import React from 'react';

const App = () => {
  let color: keyof typeof assetMapping.colors;
  color = 'default';

  const [flipped, setFlipped] = useState<boolean[]>([]);
  const reasons = [
    'test',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '10',
    '',
    '',
    '',
    '',
    '15',
    '',
    '',
    '',
    'loive',
    '20',
    '',
    '',
    '',
    '',
    '25',
    '',
    '',
    '',
    '',
    '30',
    '',
  ];

  useEffect(() => {
    let a = new Array(30).fill(false);
    setFlipped(a);
  }, []);

  return (
    <div className={'appWrapper'}>
      <Header color={assetMapping.colors[color]}></Header>
      <main className='appMain'>
        <SearchBar></SearchBar>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
          onDoubleClick={(swiper, b) => {
            setFlipped((prevState) => {
              const tmp = [...prevState];
              tmp![swiper.activeIndex] = !tmp![swiper.activeIndex];
              return tmp;
            });
          }}
        >
          {flipped?.map((isFlipped, idx) => {
            return (
              <SwiperSlide key={idx} className={isFlipped ? 'flipped' : ''}>
                <Card>
                  <Preview reason={reasons[idx]} idx={idx + 1} isFlipped={isFlipped}></Preview>
                </Card>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>{cardContent}</SwiperSlide>
          <SwiperSlide>{cardContent}</SwiperSlide>
          <SwiperSlide>{cardContent}</SwiperSlide>
          <SwiperSlide>{cardContent}</SwiperSlide> */}
        </Swiper>
      </main>
    </div>
  );
};

export default App;
