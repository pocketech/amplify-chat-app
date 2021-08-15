import { Text } from '@chakra-ui/react'
import type { InferGetStaticPropsType, NextPage } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  return {
    props: {
      timestamp: new Date().getTime(),
    },
    revalidate: 5,
  }
}
const Page: NextPage<Props> = ({ timestamp }) => {
  return <Text>time: {timestamp}</Text>
}
export default Page
