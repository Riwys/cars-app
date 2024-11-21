import './cars-styles.css';
import 'tachyons';

function Cars({carData, fetched}) {
    if (fetched === true) {
        console.log('entered if');
        return (
          <div className='grid-wrapper ph4'>
        {carData.rows.map((car) => {
            console.log(car.title, car.speed, car.img);
            return (
              <div key = {car.id} className="box shadow-2 center ph1 pv2 mv4">
                <h2>{car.title}</h2>
                <h3>{car.speed}</h3>
                <img className='shadow-1' src= {car.img} alt='Car'/>
              </div>
            );
          }
        )}
        </div>
        );
    } else {
        return;
    }
   
}

export default Cars;