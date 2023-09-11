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
  'https://picsum.photos/id/1014/600/600/',
  'https://picsum.photos/id/1018/600/600/',
  'https://picsum.photos/id/1015/600/600/',
  'https://picsum.photos/id/1021/600/600/',
  'https://picsum.photos/id/1019/600/600/',
]
const slideImages = [
  {
    image: 'https://picsum.photos/id/1020/600/600/',
    title: 'Image 1',
    description: 'this is image 1 description about',
  },
  {
    image: 'https://picsum.photos/id/1014/600/600/',
    title: 'Image 2',
    description: 'this is image 2 description about',
  },
  {
    image: 'https://picsum.photos/id/1018/600/600/',
    title: 'Image 3',
    description: 'this is image 3 description about',
  },
  {
    image: 'https://picsum.photos/id/1015/600/600/',
    title: 'Image 4',
    description: 'this is image 4 description about',
  },
  {
    image: 'https://picsum.photos/id/1019/600/600/',
    title: 'Image 5',
    description: 'this is image 5 description about',
  },
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
