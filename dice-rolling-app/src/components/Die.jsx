import "./Die.css"

const dice = (props) => {

  let number1 = props.no1
  let number2 = props.no2
  return (
    <div className='container'>

      <div className={`dice face-${number1}`}>
        <div className="dot one"></div>
        <div className="dot two"></div>
        <div className="dot three"></div>
        <div className="dot four"></div>
        <div className="dot five"></div>
        <div className="dot six"></div>
        <div className="dot seven"></div>
        <div className="dot eight"></div>
        <div className="dot nine"></div>
      </div>

      <div className={`dice face-${number2}`}>
        <div className="dot one"></div>
        <div className="dot two"></div>
        <div className="dot three"></div>
        <div className="dot four"></div>
        <div className="dot five"></div>
        <div className="dot six"></div>
        <div className="dot seven"></div>
        <div className="dot eight"></div>
        <div className="dot nine"></div>
      </div>

      {/* <div className="dice">
        {[...Array(number2)].map((value, index) => (
          <div key={index} className="dot"></div>
        ))}
      </div> */}

    </div>
  )
}

export default dice
