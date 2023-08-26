import { useEffect,useState } from 'react';

function Persons(){

    function loadPerson(){
        
        fetch("https://swapi.dev/api/people/1/")
     
        .then(response=>response.json())
        .then((data)=>{console.log(data); 
            setPerson(data);
            console.log(123);
        })
        
        .catch((err)=>{
            console.log(err.message);
        });
       
    }

    const [person,setPerson] = useState([]);
    useEffect(()=>{ loadPerson()});
    
  

    return(
        <div className="container">
            {Object.entries(person).map(([key,value])=>{
                return (
                    <div key={key}>
                        <h2>
                            {key} : {person[key]}
                        </h2>
                        <hr/>
                    </div>
                )
            })

            }
        </div>
    )

}

export default Persons;