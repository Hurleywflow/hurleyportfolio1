'use client';

import { useTheme } from '@/context/theme-context';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React, { Suspense } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';
const renderLoader = () => <p>Loading</p>;
export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='mb-28 scroll-mt-28 sm:mb-40'>
      <Suspense fallback={renderLoader()}>
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor=''>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: '1rem',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? '#BEB8AE' : 'rgba(255, 255, 255, 0.5)',
                  fontSize: '1.5rem',
                  border: '0.4rem solid #BEB8AE',
                }}
              >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='!mt-0 font-normal'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </Suspense>
    </section>
  );
}
