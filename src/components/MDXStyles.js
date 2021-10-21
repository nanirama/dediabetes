import styled from 'styled-components'
import tw from 'twin.macro'

const LandingPage = styled.div`
  ${tw`max-w-full md:text-xl`}
  width: 1200px;
  margin: 10rem auto;

  @media screen and (min-width: 800px) {
    .landing-page {
      width: 1200px;
    }
  }
` 

const PrintPage = styled.div`
  ${tw`max-w-full md:text-xl`}
  width: 1000px;
  margin: auto auto;
  color: #000;
  background-color: #fff;
  line-height: 1;


  @media print {
    .landing-page {
      width: 1000px;
      margin: 0;
    
    }
  }
`

const H1 = styled.div`
  ${tw`font-bold text-3xl md:text-5xl text-center p-4 leading-loose`}
`
const H2 = styled.div`
  ${tw`font-bold text-2xl md:text-4xl text-center p-8`}
`

const H3 = styled.div`
  ${tw`font-bold text-xl md:text-3xl text-center p-4`}
`

const A = styled.span`
  ${tw`text-red-400 underline`}
`

const Landing = {
  PrintPage,
  LandingPage,
  H2,
  H1,
  H3,
  A,
}


export default Landing
