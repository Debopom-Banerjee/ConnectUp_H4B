import { useState, useContext } from 'react'
import { ConnectUpContext } from '../context/ConnectUpContext'
import { FaUndoAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import ConnectUpCard from 'react-ConnectUp-card'

const style = {
  ConnectUpCardWrapper: `w-full h-full absolute`,
  wrapper: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-8 py-4`,
  space: `flex justify-between h-3/4 items-end mb-6`,
  name: `flex text-white text-3xl font-extrabold items-center -mb-4`,
  age: `ml-4 font-semibold text-xl`,
  walletAddress: `font-bolder text-xl text-white mb-2`,
  reactionsContainer: `flex justify-between w-full px-2 gap-5`,
  buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer border-2`,
  buttonSymbol: `text-3xl`,
  backColors: `border-white text-white`,
  xColors: `border-red-500 text-red-500`,
  starColors: `border-blue-400 text-blue-400`,
  lightningColors: `border-purple-500 text-purple-500`,
}

const ConnectUpCardItem = ({ card }) => {
  const { handleRightSwipe, currentAccount } = useContext(ConnectUpContext)

  const onSwipe = dir => {
    if (dir === 'right') {
      handleRightSwipe(card, currentAccount)
    }
  }

  return (
    <ConnectUpCard
      className={style.ConnectUpCardWrapper}
      preventSwipe={['up', 'down']}
      onSwipe={onSwipe}
    >
      <div
        className={style.wrapper}
        style={{ backgroundImage: 'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhappy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg%3Fw%3D2000&tbnid=971dOCHMBeuPoM&vet=12ahUKEwjL45eD3YOAAxV0jmMGHbcBD7IQMygAegUIARDmAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fstudent&docid=UvYenPMOihg0fM&w=2000&h=1333&q=student&ved=2ahUKEwjL45eD3YOAAxV0jmMGHbcBD7IQMygAegUIARDmAQ")' }}
      >
        <div className={style.space}>
          <div className={style.name}>
            {card.name}
            <span className={style.age}>{card.age}</span>
          </div>
        </div>
        <div className={style.walletAddress}>
          {card.walletAddress.slice(0, 6)}...{card.walletAddress.slice(39)}
        </div>
        <div className={style.reactionsContainer}>
          <div className={`${style.backColors} ${style.buttonContainer}`}>
            <FaUndoAlt
              className={`${style.backColors} ${style.buttonSymbol}`}
              onClick={() => goBack()}
            />
          </div>
          <div className={`${style.xColors} ${style.buttonContainer}`}>
            <AiOutlineClose
              className={`${style.xColors} ${style.buttonSymbol}`}
            />
          </div>
          <div className={`${style.starColors} ${style.buttonContainer}`}>
            <AiFillStar
              className={`${style.starColors} ${style.buttonSymbol}`}
            />
          </div>
          <div className={`${style.lightningColors} ${style.buttonContainer}`}>
            <BsFillLightningChargeFill
              className={`${style.lightningColors} ${style.buttonSymbol}`}
            />
          </div>
        </div>
      </div>
    </ConnectUpCard>
  )
}

export default ConnectUpCardItem