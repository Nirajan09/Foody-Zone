import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResult/SearchResult";
export const BASE_URL="http://localhost:9000";
const App = () => {

  const [data,setdata]=useState(null)
  const [loading,isLoading]=useState(null)
  const [error,setError]=useState(null)
  const [filteredData,setfilteredData]=useState(null)
  const [typeData,settypeData]=useState("all")

  const arr=[
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    },
    
  ]
  useEffect(()=>{
    isLoading(true)
    try {
      const fetchData=async ()=>{
        const response= await fetch(BASE_URL)
        const jsonform= await response.json()
        setdata(jsonform)
        setfilteredData(jsonform)
        isLoading(false)
          }
    fetchData()
    } catch (error) {
      setError("Unable to load the data")
    }

    
    
  },[])
  const SearchFilter=(e)=>{
    const searchValue=e.target.value;
    if(searchValue===""){
      setfilteredData(null)
    }
    const filter=data?.filter((food)=> 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setfilteredData(filter)
  }
  const SelectType=(type)=>{
    if(type==="all"){
      settypeData("all")
      setfilteredData(data)
      return;
    }
    const filter=data?.filter((data)=>data.type.toLowerCase().includes(type.toLowerCase()))
    settypeData(type)
    setfilteredData(filter)
  }
  if(error)return <div>{error}</div>
  if(loading) return <div>"Loading...."</div>
  return (
    <MainContainer>
      <TopContainer>
            <div className="top_section">
              <img src="../public/Foody Zone.png" alt="Foody Zone" />
              <input onChange={SearchFilter} type="text" placeholder="Search Food...."/>
            </div>
            <div className="bottom_section">
              {
                arr.map((value)=>(
                  <Button isSelected={typeData===value.type}key={value.name} onClick={()=>SelectType(value.type)} >{value.name}</Button>
                )
                  
                )
              }
              
            </div>
      </TopContainer>
      <SearchResult data={filteredData}/>
    </MainContainer>
  )
}

export default App

const MainContainer=styled.div`
`
const TopContainer=styled.div`
  display: flex;
  flex-direction:column;
  max-width: 1440px;
  height:150px;
  .top_section{
    display: flex;
    justify-content:space-between;
    margin: 25px 120px ;
    input{
      padding:10px;
      
      min-width:185px;
      outline:none;
      border:none;
      border:1px solid red;
      background:transparent;
      color:#fff;
      margin-top:10px;
      &::placeholder{
        color:#fff;
        font-size:16px;
      font-weight:400;
      }
    }
  }
  .bottom_section{
    display: flex;
    gap:10px;
    justify-content: center;
    min-width:273px;
    text-align: center;
  }
  @media (max-width:686px) {
    .top_section{
      flex-direction:column;
    }
  }
  @media(max-width:692px){
    height:220px;
  }
`
export const Button=styled.button`
  background-color:${({isSelected})=>isSelected?"rgb(243, 1, 1)":"#FF4343"};
  padding:6px 12px;
  color:#fff;
  border:none;
  outline:none;
  border-radius:10px;
  cursor:pointer;
  transition:.5s;
  text-transform:capitalize;
  &:hover{
    background-color:rgb(243, 1, 1);
    transition:.5s;
  }
`

