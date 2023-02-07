import { Heading } from '@/components/heading'
import { Container } from '@/components/project/container'
import { projects } from '@/config/projects'
import { Item } from '@/components/project/item'
export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[37.5rem] bg-[url('/bg_light.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:border-t dark:border-slate-100/5 dark:bg-[url('/bg_dark.svg')] dark:bg-[center_top_-1px]"></div>
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
