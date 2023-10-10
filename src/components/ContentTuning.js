import React from 'react'
import edges from '../assests/edges.jpg'
import head from '../assests/headOnShell.jpg'
import tunePattern from '../assests/tunePattern.jpg'
import Footer from './Footer'

function Content({subheading, instructions, imgsrc}){
return(
    <>
        <section className='text-sm md:text-lg px-5 pt-8  md:w-[50%] md:mx-auto md:text-center'>
            <h1 className='text-2xl md:text-3xl font-bold '>{subheading}</h1>
            <p>{instructions}</p>
            <img src={imgsrc} alt="" className='md:w-[80%] scale-70 mx-auto'/>
        </section>
    </>
)
}

function ContentTuning() {
  return (
    <>
        <section>
            <section className=''>
                <Content subheading="Prior to Putting on the Bass Head" instructions="Before putting on the bass head, press in the edges of the bass head in order to break it in." imgsrc={edges}/>
                <Content subheading="Putting on the Drum Head" instructions="Put the drum head on the shell, again put a little way on it in order to break in the head." imgsrc={head}/>
                <Content  subheading="Attaching the Rim and Drum Lugs" imgsrc={tunePattern} instructions="Put the rim then the drum lugs. Finger tighten the drum lugs in a star pattern. The smaller the drum the less lugs it will have. Similarly the bigger the drum the more lugs it will have. The idea is still the same, tighten in a star pattern as show above."/>
                <Content subheading="Tightening the Drum Lugs" instructions="Use a drum key to tighten the lugs by doing a quarter of a turn. Do this in the same start pattern as you did when you finger tighten the lugs. The goal key notes from bottom bass drum to top bass are D A D F# A. The notes do not need to be taken up right away, makre sure you are doing quarter turns in the start pattern until you get in range of the designed notes. Keep in mind, D major is the common chord to tune bass drums but can be any other Key as well."/>
            </section>
        </section>
        <Footer />

    </>
  )
}

export default ContentTuning