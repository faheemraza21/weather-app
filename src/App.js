import React ,{useState} from 'react'
import Axios from 'axios'





function App() {

     
     const [data, setData] = useState({})
     const[location, setLocation] = useState('')

    const url="https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=f92aa425faedb013fc3b15174f60f848"
  
{/*}  async function searchLocation() {
          console.log('inside asynsc')
     let response = await fetch(url)
    let data = response.json()
     console.log(data)
     setLocation('')
  }*/}
  
    const searchLocation = (event) => {
        Axios.get(url).then((response) =>{
          setData(response.data)
          console.log(data)
        })
        
   
 }
 
 const handleChange = (event) =>{
        console.log(event)
        setLocation(event.target.value)


 }
 
 const handleClick = () =>{
     searchLocation()
 }
   


  return (
    <div name="app" className='w-full h-screen background sm:background1 opacity-0.2 '>

    <div className=' py-2 px-2 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.4)]  border text-center absolute top-[30%] left-2 w-[100px] text-2xl font-bold sm:absolute sm:top-[30%] sm:left-[15%] sm:w-[200px] sm:h-[50px]'>
  { data.weather ?  <p className='sm:absolute dox sm:mx-[30%] '>
          {data.weather[0].main}
     </p> : null} 
    </div>
          <div className=' relative flex justify-center items-center top-6  sm:top-10 '>
                   <input  className= 'border h-[50px] bg-[rgba(255,255,255,0.3)] w-[300px] text-black  text-center'  value={location} onChange={handleChange}   placeholder='Search' type='text' />
                   <button onClick={handleClick} className=' absolute top-14 border w-40 bg-black text-white  '>
                        Submit
                   </button>
          </div>
          <div className='flex bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.4)] border justify-center items-center absolute top-[20%] right-0 w-[300px] h-[250px] sm:top-[20%] sm:absolute sm:left-[50%] sm:w-[600px] sm:h-[350px]'>
                    {/* top menu*/}
                  <h1 className='absolute font-bold top-4 text-6xl sm:text-8xl'>
                                  {data.name}
                  </h1 >
                  

             {data.main ?     <h3 className='text-3xl'>{((data.main.temp)-273).toFixed(2)} C</h3> : null}
                      





</div>






{/* bottom menu*/ }

                           <div className=' grid gap-4 sm:gap-20  grid-cols-3 sm:grid-cols-3  absolute top-[70%] left-2 sm:top-[70%] sm:h-[150px] sm:w-[600px] sm:mx-[100px]'>
                                 <div className='sm:h-[150px] bg-[rgba(255,255,255,0.3)] font-bold hover:bg-[rgba(255,255,255,0.7)] border h-[150px] w-[150px]  sm:w-full left-5 '>

                                {data.main ?          <p className='relative font-bold sm:top-5 w-[150px] h-[50px] text-center  top-3 ]'>{((data.main.feels_like)-273).toFixed(2)} C
                                          </p>: null}
                                         
                                         
                                          <p   className='relative  h-[50px] top-10 sm:top-14 text-center'>
                                               Feels like
                                        
                                          
                                          </p>
                                         
               
                                          
                                 </div>
                                 <div className='h-[150px] bg-[rgba(255,255,255,0.3)] font-bold hover:bg-[rgba(255,255,255,0.7)] border sm:h-[150px] sm:w-full w-[150px]  left-5'>
                                 {data.main ?          <p className='relative  sm:top-5 w-[150px] h-[50px] text-center  top-3 ]'>{data.main.humidity}%
                                          </p>: null}
                                         
                                          <p   className='relative top-10  w-[150px]  h-[50px] sm:top-14 text-center'>
                                               Humidity
                                          </p>
                                          
                                          
                                 </div>

                                 <div className='h-[150px] bg-[rgba(255,255,255,0.3)] font-bold hover:bg-[rgba(255,255,255,0.7)]  border sm:h-[150px] w-[150px] sm:w-full left-5'>
                                 {data.wind ?          <p className='relative  sm:top-5 w-[150px] h-[50px] text-center  top-3 ]'>{data.wind.speed} MPH
                                          </p>: null}   
                                          <p   className='relative  h-[50px] text-center top-10 sm:top-14'>
                                               Wind Speed
                                          </p>
                                          
                                          
                                 </div>
                           </div>
        
    

      
    </div>
  );
}

export default App;
