import Carousel from '@/components/carousel'
import TabList from '@/components/tabList'
import { VStack, Divider } from '@yamada-ui/react'

export default function Home() {
  return (
    <main>
      <VStack divider={<Divider />}>
        <TabList />
        <Carousel />
      </VStack>
    </main>
  )
}
