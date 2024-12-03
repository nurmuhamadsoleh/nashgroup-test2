import '../assets/scss/module/componentColor/index.css'

import React, {useState} from 'react'

export default function ComponentColor({color, initialColor}) {
    const [colors, setColors] = useState('blue')
    const handleChangeColor = (e) => {
        if(colors === e){
            setColors(undefined)
        }else{
            setColors(e)
        }
    }
  return (
    <div className='container'>
        <div className={`box-container`} style={{backgroundColor: colors === "" ? initialColor : colors}}>
        </div>
            <div className={`div-box-childs`}>
                {color?.map((val, index) => {
                    return (
                        <div className={`div-box-childs-color`} style={{backgroundColor: val}} key={index} onClick={() => handleChangeColor(val)}></div>
                    )
                })}
            </div>
    </div>
  )
}
