'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { block } from 'million/react';
import React from 'react';
import ProjectBlock from './project';
import SectionHeadingBlock from './section-heading';

const ProjectsBlock = block(function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

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
});
export default ProjectsBlock;
