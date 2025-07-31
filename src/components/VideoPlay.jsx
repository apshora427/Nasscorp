
import v1 from "../assets/videoImage1.png";
import v2 from "../assets/videoImage2.png"
import video from "../assets/video.png"
import button from "../assets/button.png"


const info = [
    {
        id: 1,
        img: v1,
        h4: "the quick fox jumps over the lazy dog",
        span: "Things  on a very small scale ..."
    },
    {
        id: 2,
        img: v2,
        h4: "the quick fox jumps over the lazy dog",
        span: "Things  on a very small scale ..."
    }
]

const VideoPlay = () => {
    return (
        <section className="py-[100px]">
            <div className="container">
                <div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-text-color text-[40px] font-bold leading-[57px] w-[318px] md:w-[580px]">
                            We take care customers our all expert here.
                        </h1>
                        <p className="text-second-text-color text-[14px] font-medium leading-[20px] w-[225px]  md:w-[511px] h-[70px] mt-[10px] mb-[100px] md:mb-[50px]">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[400px_auto] lg:grid-cols-[500px_auto] justify-center items-center gap-0 md:gap-[50px] lg:gap-[102px]">
                        <div className=" mx-auto mb-[52px] relative">
                            <img className="w-[333px] lg:w-[500px] md:h-[450px] lg:h-[400px] object-cover" src={video} alt="" />
                            <div className="absolute top-[50%] left-[50%] translate-[-50%] size-[98px]">
                                {/* <img src={button} alt="" /> */}
                                <button className="button is-play cursor-pointer" href="#">
                                    <div className="button-outer-circle has-scale-animation"></div>
                                    <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                                    <div className="button-icon is-play">
                                        <svg height="100%" width="100%" fill="#fff" viewBox="0 0 35 35">
                                            <polygon className="triangle" points="5,0 30,15 5,30" />
                                            <path className="path" d="M5,0 L30,15 L5,30z" fill="none" stroke="black" strokeWidth="1" />
                                        </svg>
                                    </div>
                                </button>

                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-text-color text-[40px] font-bold leading-[57px] w-[333px] ">
                                    Most trusted in our field
                                </h2>
                                <p className="text-second-text-color text-[14px] font-medium leading-[20px] w-[333px] h-[70px] mt-[10px] mb-[50px] md:mb-[30px]">
                                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                                </p>
                            </div>
                            <div className="mx-auto">
                                {info?.map(infoItem => {
                                    return <Box key={infoItem.id} img={infoItem.img} h4={infoItem.h4} span={infoItem.span} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoPlay

const Box = ({ img, h4, span }) => {
    return (
        <div className="grid grid-cols-[50px_290px] justify-center">
            <div className="w-[50px] mx-auto">
                <img className="" src={img} alt="" />
            </div>
            <div className="w-auto mx-auto">
                <h4 className="text-text-color text-[16px] font-bold leading-[24px] w-[286px]">
                    {h4}
                </h4>
                <span className="text-second-text-color text-[14px] font-semibold leading-[24px]" >
                    {span}
                </span>
            </div>
        </div>
    )
}