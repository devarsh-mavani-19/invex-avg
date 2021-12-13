import AllSectorsSidebar from './AllSectorsSidebar'
import SectorsMain from './SectorsMain'
import './styles.css'

const Sectors = () => {
  return (
    <div class='main'>
      <section class='sectors_sec'>
        <div class='container'>
          <div class='row'>
            <AllSectorsSidebar />
            <SectorsMain />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sectors
