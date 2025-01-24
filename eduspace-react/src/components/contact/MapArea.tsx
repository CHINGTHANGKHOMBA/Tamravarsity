 

const MapArea = () => {
  return (
    <>
       <div className="map-area-section section-padding pt-0 fix">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="map-area">
                    <div><iframe width="820" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=Neilit+imphal&t=&z=12&ie=UTF8&iwloc=&output=embed"></iframe></div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </>
  );
};



export default MapArea;