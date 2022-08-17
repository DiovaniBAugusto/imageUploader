import { useState } from 'react';
import { API } from '../../lib/api'

function UploadImage() {
    const [imgPreview, setImgPreview] = useState(null);
    const [imgFile, setImgFile] = useState(null);
    const [imgLink, setImgLink] = useState(null);
    const [msgAlert, setMsgAlert] = useState("");

    const handleImagePreview = (e) => {
      let image_as_base64 = URL.createObjectURL(e.target.files[0]);
      let image_as_files = e.target.files[0];
  
      let imageReader = new FileReader();
      imageReader.onload = (file)=>{
        setImgFile(file.target.result);
      }
      imageReader.readAsDataURL(image_as_files);
      setImgPreview(image_as_base64);
    };
  
    const handleImageSave = async()=>{
        await API.post("/image",{image: imgFile}).then((resp)=>{  
          if(resp.data._id){
            setImgLink(`http://localhost:3000/image/${resp.data._id}`);
          }
        }).catch(e=>{
          console.log(e);
        })
    }

    const handleCopy = ()=>{
      let imgLink = document.getElementById("imgLink");
      imgLink.select();
      document.execCommand("copy");
      setMsgAlert("Copiado!");
      setTimeout(()=>{
        setMsgAlert("");
      },2000);
    }
  
    return (
      <div className="App">
        <div className="container">
          <div className='image-preview'>
            <img src={imgPreview ?? 'https://vmcom.com.br/adm_cursos/admpanel-vm/img/default.jpg'} alt='Imagem'/>
          </div>
          <div className='confirm-field'>
            {imgLink
            ?
              <div className="copy-field">
                <input className="link-field" value={imgLink} contentEditable={false} id="imgLink" />
                <button className= "copy-btn" onClick={handleCopy}>Copiar</button>
                <span className='alert'>{msgAlert}</span>
              </div>
            :
              <>
                <input
                  className="file-input"
                  id="file-input"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={handleImagePreview}
                />
                {imgPreview && (
                  <button onClick={handleImageSave}>Salvar imagem</button>
                )}
              </>
            }   
          </div>
        </div>
      </div>
    );
  }
  
  export default UploadImage;