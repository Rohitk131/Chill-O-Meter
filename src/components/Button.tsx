const NeubrutalismButton = ({handleModelOpen}) => {
    return (
      <button
        onClick={handleModelOpen}
        className={'group/button rounded-lg bg-white text-black'}
      >
        <span
          className={
            'block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-yellow-300 px-4 py-1 text-xl font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0'
          }
        >
            Take the Chill Quiz!
        </span>
      </button>
    )
  }
  
  export default NeubrutalismButton