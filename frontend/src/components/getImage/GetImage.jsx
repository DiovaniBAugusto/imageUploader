import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { API } from '../../lib/api.js';

function GetImage(){
    const [image,setImage]  = useState(null);
    const params = useParams();
    useEffect(()=>{
        const getImage = async()=>{
            const response = await API.get(`image/${params.ImgId}`);
            setImage(response.data.image);
        }
        getImage();
    },[]);
    return(
      <div className="App">
        <div className="container">
          <div className='image-preview'>
            <img src={image} alt='Imagem'/>
          </div>
          <div className='confirm-field'>
            <a className='download' href={image} download>Fazer download</a>
          </div>
        </div>
      </div>
    )
}

export default GetImage;