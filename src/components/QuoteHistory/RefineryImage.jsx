import RefineryPic from '../../assets/Refinery.jpg'



function RefineryImage() {
    return(
        <>
            <div className="circle-2"></div>
            <div className="circle-1"></div>
            <img className="refinery-pic" src={RefineryPic} alt="Oil Refinery"/>
        </>
    );
}

export default RefineryImage