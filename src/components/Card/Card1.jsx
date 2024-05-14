export default function Card1(props) {
  return(
    <div className="flex justify-center items-center border-2 bg-white border-black px-16 py-52 rounded-[1rem] drop-shadow-[0_10px_4px_rgba(0,0,0,0.25)]">
      <img src={props.icone} alt="" className="size-28" />
    </div>
  )
}