import styled from 'styled-components'

const TotalScore = ( {score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total score</p>
    </ScoreContainer>
  )
}

export default TotalScore


const ScoreContainer = styled.div`

    text-align: center;
    /* background-color: blue; */
    max-width: 200px;
    h1{
        font-size: 100px;
        line-height: 100px;
    }

    p{
        font-size: 24px;
        font-weight: 500px;
    }

    @media (max-width: 768px){
      
      h1{
         
        font-size:70px;
      }

      p{
        font-size: 24px;
      }
    }


`
