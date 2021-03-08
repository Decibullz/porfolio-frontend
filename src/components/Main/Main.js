import BookIt from '../Projects/BookIt'
import CouchCritic from '../Projects/CouchCritic'
import Shouts from '../Projects/Shouts'
import TeslaClone from '../Projects/TeslaClone'
import VeronicasLabFinder from '../Projects/VeronicasLabFinder'
import Python from '../Python/Python'
import './Main.css'

const Main = () => {
  return (
    <div className="projects">
      <TeslaClone />
      <hr />
      <Shouts />
      <hr />
      <CouchCritic />
      <hr />
      <BookIt />
      <hr />
      <VeronicasLabFinder />
      <hr />
      <Python />
      <hr />
    </div>
  )
}

export default Main
