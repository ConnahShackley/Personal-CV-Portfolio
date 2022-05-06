import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projecst">
    <SectionDivider />
    <SectionTitle main>Project Examples</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, repositories, visit}) => (
        <BlogCard Key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>View Code</ExternalLinks>
              <ExternalLinks href={repositories}>Other Repositories</ExternalLinks>
            </UtilityList>

        </BlogCard>
   
      ))}
    </GridContainer>
  </Section>
);

export default Projects;