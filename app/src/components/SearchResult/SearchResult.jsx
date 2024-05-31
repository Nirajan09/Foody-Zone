
import styled from 'styled-components'
import { BASE_URL, Button } from '../../App'
const SearchResult = ({data:food}) => {
    
  return (
    <div>
      <BottomContainer>
          <FoodCards>
            {food?.map((food)=>(
                <FoodCard key={food.name}>
                    <div className="food_image">
                        <img src={BASE_URL + food.image} alt="food" />
                    </div>
                    <div className="food_content">
                        <div className="text_content">
                            <h3>{food.name}</h3>
                            <p>{food.text}</p>
                        </div>
                        <div className="pro">
                            <Button>${food.price.toFixed(2)}</Button>
                        </div>
                    </div>
                </FoodCard>
            )
            )}
          </FoodCards>
      </BottomContainer>
    </div>
  )
}

export default SearchResult
const BottomContainer=styled.div`
  background-image:url('/bg.png');
  min-height:calc(100vh - 150px);
  background-size:cover;
  /* padding-bottom:1rem; */
`
const FoodCards=styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    /* margin:0 145px; */
    row-gap:32px;
    column-gap:20px;
    padding-top:80px;
`
const FoodCard=styled.div`
    max-width: 340px;
    height: 167px;
    border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;


    
    img{
        border-radius:50%;
    }
    .text_content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        h3{
            font-size:16px;
            font-weight:600;
            margin:10px 0;
        }
        p{
            font-size:12px;
            margin-bottom: 35px;
           
        } 
    }
    .pro{
            display: flex;
            justify-content: flex-end;
        }
    @media (max-width:618px){
        h3{
            font-size:14px;
            font-weight:500;
        }
       
    }
`
