import {Route, Routes} from 'react-router-dom'
import GetImagePage from './pages/GetImagePage.jsx'
import UploadImagePage from './pages/UploadImagePage.jsx'
function PagesRoutes(){
    return(
        <Routes>
            <Route path='/' element={<UploadImagePage/>}/>
            <Route path='/image/:ImgId' element={<GetImagePage/>}/>
        </Routes>
    )
};

export default PagesRoutes;