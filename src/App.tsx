import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="post-card news-post ">
        <div className="post-thumb">
          <a href="/single-post-1"><img src="/assets/news-post-2.jpg" alt="post"/></a>
        </div>
        <div className="post-content">
          <a className="card-btn bg-blue-light" href="/#">Business</a>
          <h3 className="title"><a href="/single-post-1">How Product Designers Can Gamification for any Good.</a></h3>
          <ul className="post-list">
            <li className="author">by <span><a href="/author-details">David Bin</a></span></li>
            <li className="date">July 29, 2024</li>
            <li>5</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur. Tellus suspen any more at disse reasy nulla aliquam.</p>
          <a className="news-post-btn" href="/single-post-1"></a>
        </div>
      </div>
      <p>Gid ---- grid-cols-* --- gap-number ---  children -- col-span*/row-span*</p>
      <p>Gid ---- grid-rows-* --- gap-number ---  children -- grid-flow-col --- [200px_minmax(100px,1fr)_100px]</p>
      <p>class="grid grid-flow-col auto-cols-[minmax(200px,1fr)] gap-4"</p>
      <div className='grid grid-cols-(--var-columns) gap-4'>
        <div className='col-start-1 col-end-4 box-small'>01</div>
        <div className='box-small'>02</div>
        <div className='box-small'>03</div>
        <div className='box-small col-span-2'>04</div>
        <div className='box-small'>05</div>
        <div className='box-small'>06</div>
      </div>
    </>
  )
}

export default App
