'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import ProjectBlock from './project';
import SectionHeadingBlock from './section-heading';

const ProjectsBlock = () => {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section ref={ref} id='projects' className='mb-28 scroll-mt-28'>
      <SectionHeadingBlock>My projects</SectionHeadingBlock>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectBlock {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default ProjectsBlock;
