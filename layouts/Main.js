import Head from 'next/head'
import Nav from 'components/Nav'
import styled from 'styled-components'
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
export default ({ children, title = 'bio' }) => (
  <Wrapper>
    <Head><title>{title}</title></Head>
    <header><Nav /></header>
    <main>{children}</main>
  </Wrapper>
)
