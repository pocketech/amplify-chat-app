import { Text } from '@chakra-ui/react'
import type { InferGetStaticPropsType, NextPage } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const date = new Date()
  const current = date.toLocaleString()
  return {
    props: {
      current,
    },
    revalidate: 5,
  }
}
const Page: NextPage<Props> = ({ current }) => {
  return <Text>現在時刻は{current}ですよ。</Text>
}
export default Page
