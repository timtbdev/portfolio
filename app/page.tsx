import { Heading } from '@/components/heading'
import { Container } from '@/components/project/container'
import { projects } from '@/config/projects'
import { Item } from '@/components/project/item'
export default function Home() {
  return (
    <>
      <div>
        <Heading />
        {projects.map((project, idx) => (
          <Container key={`${project.id}+${idx}`} url={project.url}>
            <Item item={project} idx={project.id} />
          </Container>
        ))}
      </div>
    </>
  )
}
