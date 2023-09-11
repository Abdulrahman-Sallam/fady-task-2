import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import MyData from './components/MyData'
import MyDataForm from './components/MyDataForm'
import UpdateDataComponent from './components/UpdateDataComponent'
import Table from './containers/Table/Table'
import { data, viewData } from './utils/data'
import GallerySlider from './components/Slide/GallerySlider'
const images = [
  'https://picsum.photos/id/1018/1000/600/',
  'https://picsum.photos/id/1015/1000/600/',
  'https://picsum.photos/id/1019/1000/600/',
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}

    <GallerySlider images={images} />
    {/* <MyData />
    <h1>Add Data</h1>
    <MyDataForm />
    <h1>Update Data</h1>
    <UpdateDataComponent />
    <Table data={data} viewData={viewData} /> */}
  </React.StrictMode>
)
