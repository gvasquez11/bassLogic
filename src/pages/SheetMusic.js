import React from 'react'
import NavigationBar from '../components/NavigationBar'
import eights from '../sheetmusic/eight-on-a-hand.pdf'
import eightsCover from '../assests/eightsCover.PNG'
import juansTacos from '../sheetmusic/jt.pdf'
import jtCover from '../assests/jtCover.PNG'
import daily from '../sheetmusic/daily.pdf'
import dailyCover from '../assests/daily.PNG'
import duoSplit from '../sheetmusic/duoSplit.pdf'
import duoSplitCover from '../assests/duo.PNG'
import sixteenGrid from '../sheetmusic/16Grid.pdf'
import sixteenCover from '../assests/16Note.PNG'
import tripletGrid from '../sheetmusic/tripletGrid.pdf'
import tripletCover from '../assests/triplet.PNG'
import sixteenTiming from '../sheetmusic/16Timing.pdf'
import sixteenTimeCover from '../assests/16Timing.PNG'
import pantera from '../sheetmusic/pantera.pdf'
import panteraCover from '../assests/pantera.PNG'
import Footer from '../components/Footer'

function SheetMusicHero(){

  return(
    <>
        <section className='text-sm md:text-lg px-5 pt-4 '>
            <h1 className='text-2xl md:text-3xl font-bold md:text-center'>Sheet Music</h1>
            <p className='pt-5 md:w-[60%] md:mx-auto'>
             Welcome to our Sheet Music page at Bass Logic! Here you'll find a selection of sheet music for marching bass drummers of all skill levels. We understand that finding good quality sheet music for bass drummers can be a challenge, so we've curated a collection of exercises and pieces that can help you improve your skills and challenge yourself. Our sheet music is available as downloadable PDF documents, making it easy for you to access and print out the music you need. Whether you're a beginner or an experienced bass drummer, we have something for you.
            </p>
        </section>
    </>
  )
}

function SheetMusicContent({name, sheet, preview}){
return(
  <>
    <section className='px-4 w-full py-6'>
      <section className='md:w-[80%] md:mx-auto'>
        <section className='w-full md:mx-auto md:text-center md:text-2xl font-bold'><a href={sheet} download={sheet}>Download {name}</a></section>
        <img src={preview} alt="" className='md:mx-auto md:w-[70%]'/>
      </section>
    </section>
  </>

)
}


function SheetMusic() {
  return (
    <>
      <NavigationBar/>
      <SheetMusicHero/>
      <SheetMusicContent name="Eight on a Hand" sheet={eights} preview={eightsCover}/>
      <SheetMusicContent name= "Juan's Tacos" sheet={juansTacos} preview={jtCover}/>
      <SheetMusicContent  name="Daily Vitamins" sheet={daily} preview={dailyCover}/>
      <SheetMusicContent name="Duo Split" sheet={duoSplit} preview={duoSplitCover}/>
      <SheetMusicContent name="16th Note Accent Grid" sheet={sixteenGrid} preview={sixteenCover}/>
      <SheetMusicContent name="Triplet Note Accent Grid" sheet={tripletGrid} preview={tripletCover}/>
      <SheetMusicContent name="16th Note Timing" sheet={sixteenTiming} preview={sixteenTimeCover}/>
      <SheetMusicContent name={"Pantera"} sheet={pantera} preview={panteraCover}/>
      <Footer />
    </>
  )
}

export default SheetMusic