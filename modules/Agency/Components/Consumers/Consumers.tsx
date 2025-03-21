'use client';
import React, {FC} from 'react';

import {animated, useInView} from '@react-spring/web';

import s from './Consumers.module.scss';

interface ConsumersProps {}

export const Consumers: FC<ConsumersProps> = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {opacity: 0, x: -60},
      to: {opacity: 1, x: 0}
    }),
    {rootMargin: '-20% 0%'}
  );

  return (
    <animated.div ref={ref} style={springs} className={s.container}>
      <h1 className={s.title}>
        Кому подойдет <span className='text-primary-500 ml-2'>?</span>
      </h1>

      <div className='flex flex-col gap-5'>
        <div className={s.item}>
          <h2 className='text-xl font-bold'>
            <span className='text-primary-500 ml-2'>1.</span> Тем у кого нету времени для поиска своей мотоцикла мечты по многочисленным сервисам
          </h2>
          {/* <p className='mt-3 text-gray-500 '>
            - Продукт на маркетплейсе сэкономит бюджет и время на разработке сайта с 0.
            <br /> Чтобы исключить лишние траты, мы решаем ваши боли и даем возможность выбрать готовый продукт по
            вашему вкусу
          </p> */}
        </div>{' '}
        <div className={s.item}>
          <h2 className='text-xl font-bold'>
            <span className='text-primary-500 ml-2'>2.</span> Тем кто ещё не определился с выбором, и хочет осмотреть множется разных мотоциклов
          </h2>
          {/* <p className='mt-3 text-gray-500 '>
            - Требуется расширение функциональности для текущего проекта или хотите новый? <br /> Предоставим
            веб-приложения и/или отдельные модули, которые поможем внедрить в ваш проект
          </p> */}
        </div>{' '}
        <div className={s.item}>
          <h2 className='text-xl font-bold'>
            {' '}
            <span className='text-primary-500 ml-2'>3.</span> Каждому кто желает удобно купить Мотоцикл!
          </h2>
          {/* <p className='mt-3 text-gray-500 '>
            - Предоставим проекты и модули для дальнейшей перепродажи или использования в личных заказах{' '}
          </p> */}
        </div>
      </div>
    </animated.div>
  );
};
