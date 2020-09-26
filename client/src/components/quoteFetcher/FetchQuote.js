import React, { useState, useEffect} from 'react'

const FetchQuote = (props) => {
    const [quote, setQuote] = useState('');
    // const [loading, setLoading] = useState(true);
    const [author, setAuthor]= useState('');
    const [provider, setProvider] = useState('')
    const [imagePic, setImagePic] = useState('')
    const [loading, setLoading] = useState(true)
    // let isRendered = useRef(false);
    useEffect(() => {
                // isRendered=true
                let random = Math.floor(Math.random() * 11)
                if (random % 2 === 0){
                     let chosenOne = fetch('http://quotes.rest/qod.json?category=inspire')
                    .then(res=>res.json())
                    .then(data=>{       
                        if((loading) && (!props.auth)){          
                        // console.log(data)   
                        setQuote(data.contents.quotes[0].quote)
                        setAuthor(data.contents.quotes[0].author)
                        setProvider("Brought to you by " + data.copyright.url)
                        setImagePic(data.contents.quotes[0].background)
                        // setLoading(false)
                        // console.count(chosenOne)
                        }
                        return null
                    })
                    .catch((error)=>console.log(error.message))
                }else{
                     let chosenOne = fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
                    .then(res=>res.json())
                    .then(data=>{
                        if((loading) && (!props.auth)){
                        setQuote(data.verse.details.text)
                        setAuthor(data.verse.details.reference)
                        setProvider(data.verse.notice)
                        setImagePic("https://media.swncdn.com/cms/CW/faith/64162-tree-of-knowledge-1200.1200w.tn.jpg")
                        // setLoading(false)
                        console.count(chosenOne)

                        }
                    
                    })
                    .catch((error)=>console.log(error.message))
                }
                

        return () =>  {
            // isRendered = false 
            setLoading(false) 
              }
    }, [quote, author, provider, imagePic, loading, props.auth])

    return(
        <div className="jumbotron jumbotron-fluid" style={{maxHeight:"300px"}}>
            <img src={imagePic} style={{height:"200px", marginTop:"-100px"}} className="center img-fluid img-thumbnail rounded mx-auto d-block" alt="inspiration"/>
            <blockquote className='blockquote text-center'>
                <p>
                {quote}
                </p>
                <footer className='blockquote-footer'>{author}</footer>
                <p style={{fontSize:"10px"}}>{provider}</p></blockquote>
            
        </div>
    )
}

export default FetchQuote