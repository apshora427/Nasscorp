const CounterCard = ({icon,countNumber,text}) => {
  return (
    <div className="  grid grid-cols-[48px_1fr] justify-center items-center gap-[22px]  bg-white p-5">
    <div>
      <img src={icon} alt={icon}/>
    </div>
    <div>
      <h5 className="text-[24px] font-bold text-text-color">{countNumber}</h5>
      <p className="text-sm font-semibold text-second-text-color">{text}</p>
    </div>
  </div>
  )
}

export default CounterCard