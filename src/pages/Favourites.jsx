import React, { useContext } from 'react'


import { FavContext } from '../favContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Favourites = () => {
  const { handleAddtoFav, fav } = useContext(FavContext);

  return (
    <div>
      <Nav />
      {fav.length ? (
        <div className="mice-parent">
          {fav?.map((el) => {
            const isExists = (fav.find((itm) => itm._id === el._id));

            return (

              <div key={el._id}>
                <div className="mice-children" key={el._id}>

              
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <br />
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div >
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1>💤💤💤</h1>
          <h1>buyer bom bosh</h1>
        </div>
      )}
      <Footer />

    </div>
  )
}

export default Favourites