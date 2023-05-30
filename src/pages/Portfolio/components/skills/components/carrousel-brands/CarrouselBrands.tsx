import { CarrouselBrandsContainer } from ".";

function CarrouselBrands() {
    return (
        <>
            <CarrouselBrandsContainer>
                <div className="inner-wrapper">

                    <div className="item">
                        <img src={'img/alcatel.png'} alt="alcatel" />
                    </div>
                    <div className="item">
                        <img src={`img/apple.png`} alt="apple" />
                    </div>
                    <div className="item">
                        <img src={'img/huawei.png'} alt="huawei" />
                    </div>
                    <div className="item">
                        <img src={`img/lg.png`} alt="lg" />
                    </div>
                    <div className="item">
                        <img src={'img/motorola.png'} alt="motorola" />
                    </div>
                    <div className="item">
                        <img src={'img/nokia.png'} alt="nokia" />
                    </div>
                    <div className="item">
                        <img src={'img/samsung.png'} alt="samsung" />
                    </div>
                    <div className="item">
                        <img src={'img/xiaomi.png'} alt="xiaomi" />
                    </div>
                </div>

            </CarrouselBrandsContainer>
            <div className="pseduo-track"></div>
        </>
    )
}
export default CarrouselBrands