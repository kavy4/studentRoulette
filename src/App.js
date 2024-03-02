import { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import './App.css'

export default function App() {
  const segments = [
  'Балянова Арина',
  'Гелло Мария',
  'Гончаренко Роман',
  'Казаков Матвей',
  'Краснов Александр',
  'Кузьменко Софья',
  'Купцов Федор',
  'Митряев Андрей',
  'Натанилова Эвелина',
  'Натанилова Этель',
  'Платонов Арсений',
  'Райская-Орешкина Анна',
  'Рыбакова Ульяна',
  'Сидоров Александр',
  'Тишкин Ярослав',
  'Торутева Диана',
  'Фадеева Ольга',
  'Фомичева Елизавета',
  'Хабенко Александра',
  'Цветков Егор',
  'Шапавалов Никита',
  'Шопин Олег'
]

  const segColors = segments.map((element, index) => {
    if (index % 2 == 0) {
      return 'black'
    } else {
      return '#60BA97'
    }
  })

  const onFinished = (winner) => {
    console.log(winner);
  }

  const [upDuration, setUpDuration] = useState(100)
  const [downDuration, setDownDuration] = useState(600)

  console.log(upDuration)
  console.log(downDuration)

  return (
    <div className="App">
      <div style={{ fontSize: '18px' }}>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText=""
          isOnlyOnce={false}
          size={290}
          upDuration={upDuration}
          downDuration={downDuration}
          fontFamily="Helvetica"
        />
      </div>
    </div>
  );
}

// import { useState } from 'react'
// import './App.css'
// import { Wheel } from 'react-custom-roulette'

// const fullNames = [
//   'Балянова Арина',
//   'Гелло Мария',
//   'Гончаренко Роман',
//   'Казаков Матвей',
//   'Краснов Александр',
//   'Кузьменко Софья',
//   'Купцов Федор',
//   'Митряев Андрей',
//   'Натанилова Эвелина',
//   'Натанилова Этель',
//   'Платонов Арсений',
//   'Райская-Орешкина Анна',
//   'Рыбакова Ульяна',
//   'Сидоров Александр',
//   'Тишкин Ярослав',
//   'Торутева Диана',
//   'Фадеева Ольга',
//   'Фомичева Елизавета',
//   'Хабенко Александра',
//   'Цветков Егор',
//   'Шапавалов Никита',
//   'Шопин Олег'
// ]

// const data = fullNames.map((element) => {
//   return {
//     option: element
//   }
// })

// export default () => {
//   const [mustSpin, setMustSpin] = useState(false);
//   const [prizeNumber, setPrizeNumber] = useState(0);

//   const handleSpinClick = () => {
//     if (!mustSpin) {
//       const newPrizeNumber = Math.floor(Math.random() * data.length);
//       setPrizeNumber(newPrizeNumber);
//       setMustSpin(true);
//     }
//   }

//   return (
//     <>
//       <Wheel
//         mustStartSpinning={mustSpin}
//         prizeNumber={prizeNumber}
//         data={data}

//         textDistance={75}

//         // innerRadius={5}

//         // ={10}

//         radiusLineWidth={0}
//         // outerBorderWidth={50}

//         onStopSpinning={() => {
//           setMustSpin(false);
//         }}
//       />
//       <button onClick={handleSpinClick}>SPIN</button>
//     </>
//   )
// }