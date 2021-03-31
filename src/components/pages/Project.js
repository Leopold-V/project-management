import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import useClipboard from "react-use-clipboard";
import gfm from 'remark-gfm';

import { projectsSelector } from '../../slices/sliceProjects';
import { tasksSelector } from '../../slices/sliceTasks';

import { ContainerSection, ContainerCardTask, ContainerCard } from '../Container';
import { Card } from '../Card';
import { WrapperTransition } from '../Container/WrapperTransition';
import { NotFound } from './NotFound';
import { Text, TitlePrimary } from '../Typography';
import { Button } from '../Button';

export const Project = (props) => {
  const id = props.match.params.id;

  const [markdown, setMarkdown] = useState('');
  const [isCopied, setCopied] = useClipboard(markdown);

  useEffect(() => {
    setMarkdown('')
  }, [id]);

  const projects = useSelector((state) => projectsSelector(state).filter((ele) => ele.id === id));
  const tasks = useSelector((state) => tasksSelector(state).filter((ele) => ele.projectId === id));

  const generateMarkdown = () => {
    const todo = tasks.filter((ele) => ele.progression === 'todo');
    const inprogress = tasks.filter((ele) => ele.progression === 'in progress');
    const completed = tasks.filter((ele) => ele.progression === 'completed');
    let markdown = `# ${projects[0].name} :\n \n## Todo\n`;
    todo.forEach(ele => {
      markdown += `* [ ] &nbsp; ${ele.name}\n`
    });
    markdown += '\n## In progress\n';
    inprogress.forEach(ele => {
      markdown += `* [ ] &nbsp; ${ele.name}\n`
    });
    markdown += '\n## Completed\n';
    completed.forEach(ele => {
      markdown += `* [x] &nbsp; ${ele.name}\n`
    });
    setMarkdown(markdown);
  };

  if (projects.length === 0) {
    return <NotFound />;
  }

  return (
    <WrapperTransition>
      <ContainerSection>
        <ContainerCardTask key={id} pid={id} />
        <ContainerCard>
          <div>
            <Card>
              <TitlePrimary style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>
                {projects[0].name}
              </TitlePrimary>
              <Text style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0].tech}</Text>
              <Text style={{ overflowWrap: 'anywhere', textAlign: 'center' }}>{projects[0].resume}</Text>
            </Card>
          </div>
          <Card>
            <WrapperButton>
              <Button light color="danger" onClick={generateMarkdown}>Generate Markdown</Button>
            </WrapperButton>
            <ReactMarkdown plugins={[gfm]} children={markdown} style={{listStyle: 'none'}} />
            {markdown.length > 0 && <Button onClick={setCopied} style={{marginTop: '2rem'}}>
              Copy to clip-board ? {isCopied ? "Yes 👍" : "No 👎"}
            </Button>}
          </Card>
        </ContainerCard>
      </ContainerSection>
    </WrapperTransition>
  );
};

const WrapperButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`