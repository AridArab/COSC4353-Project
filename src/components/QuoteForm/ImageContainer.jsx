import OilPumpPic from '../../assets/OilPump.jpg'

function ImageContainer(){

    return(

        <>
        <div class="image-container">
            <img className="oilPump-img" src={OilPumpPic} alt="Oil Pump" />    
        </div>
        </>
    );


}
export default ImageContainer