import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Spray from '../assests/spray.PNG'
import Footer from '../components/Footer'

function MuffleHero(){

return(
  <>
        <section className='text-sm md:text-lg px-5 pt-4 md:text-center'>
            <h1 className='text-2xl md:text-3xl font-bold'>Marching Bass Drum Muffling</h1>
            <p className='pt-5 md:w-[60%] md:mx-auto'>
              Welcome to our Bass Muffling Guide at Bass Logic! Properly muffling your bass drum is essential for achieving the perfect sound for your performance or recording. Muffling techniques can help to control unwanted overtones and create a more focused and balanced sound. In this guide, we'll provide you with step-by-step instructions and tips for properly muffling your bass drum. Our guide is suitable for bass drummers of all skill levels, so whether you're a beginner or an experienced player, we're confident that you'll find our Bass Muffling Guide helpful.
            </p>
        </section>
  </>
)

}


function Muffling() {
  return (
    <>
      <NavigationBar/>
      <MuffleHero />
        <section className='text-sm md:text-lg px-5 pt-4 md:text-center'>
            <h1 className='text-2xl md:text-3xl font-bold'>Choosing the Foam</h1>
            <p className='pt-5 md:w-[60%] md:mx-auto'>
              The first step is to choose the type of foam. You can purchase foam from any upholstery store. If you are in Southern California, we recommend A1 Foam and Fabric located at 1812 S Main St, Santa Ana, CA 92707.
            </p>
        </section>

        <section className='text-sm md:text-lg px-5 pt-4 md:text-center'>
            <h1 className='text-2xl md:text-3xl font-bold'>Cutting the Foam</h1>
            <p className='pt-5 md:w-[60%] md:mx-auto'>
              Next, follow the dimensions shown in the table below to know the cuts for your foam.
            </p>
        </section>

      {/* Table */}
      <section className='pt-4 px-4'>
        <table className='md:mx-auto border border-white'>
            <thead className='border border-white'>
                <tr >
                    <th className='border border-white px-4'>Bass Size</th>
                    <th className='border border-white px-4'>Height (side that touches the head)</th>
                    <th className='border border-white px-4'>Thickness (side that adheres to shell)</th>
                    <th className='border border-white px-4'>Length</th>
                    <th className='border border-white px-4'>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-white'>16"</td>
                    <td className='border border-white'>0.75"</td>
                    <td className='border border-white'>2"</td>
                    <td className='border border-white'>52"</td>
                    <td className='border border-white'>0.75" x 2" x 52"</td>
                </tr>
                <tr>
                    <td className='border border-white'>18"</td>
                    <td className='border border-white'>1"</td>
                    <td className='border border-white'>2"</td>
                    <td className='border border-white'>58"</td>
                    <td className='border border-white'>1" x 2" x 58"</td>
                </tr>
                <tr>
                    <td className="border border-white">20"</td>
                    <td className="border border-white">1.25"</td>
                    <td className="border border-white">2"</td>
                    <td className="border border-white">64"</td>
                    <td className="border border-white">1.25" x 2" x 64"</td>
                </tr>
                <tr>
                    <td className="border border-white">22"</td>
                    <td className="border border-white">1.5"</td>
                    <td className="border border-white">2"</td>
                    <td className="border border-white">72"</td>
                    <td className="border border-white">1.5" x 2" x 72"</td>
                </tr>
                <tr>
                    <td className="border border-white">24"</td>
                    <td className="border border-white">1.75"</td>
                    <td className="border border-white">2"</td>
                    <td className="border border-white">77"</td>
                    <td className="border border-white">1.75" x 2" x 77"</td>
                </tr>
                <tr>
                    <td className="border border-white">26"</td>
                    <td className="border border-white">2"</td>
                    <td className="border border-white">2"</td>
                    <td className="border border-white">83"</td>
                    <td className="border border-white">2" x 2" x 83"</td>
                </tr>
                <tr>
                    <td className="border border-white">28"</td>
                    <td className="border border-white">2.5"</td>
                    <td className="border border-white">3"</td>
                    <td className="border border-white">89"</td>
                    <td className="border border-white">2.5" x 3" x 89"</td>
                </tr>
                <tr>
                    <td className="border border-white">30"</td>
                    <td className="border border-white">2.75"</td>
                    <td className="border border-white">3"</td>
                    <td className="border border-white">96"</td>
                    <td className="border border-white">2.75" x 3" x 96"</td>
                </tr>
                <tr>
                    <td className="border border-white">32"</td>
                    <td className="border border-white">3"</td>
                    <td className="border border-white">3"</td>
                    <td className="border border-white">102"</td>
                    <td className="border border-white">3" x 3" x 102"</td>
                </tr>
            </tbody>
        </table>
      </section>

      <section className='text-sm md:text-lg px-5 pt-4 md:text-center'>
            <h1 className='text-2xl md:text-3xl font-bold'>Applying Adhesive Spray</h1>
            <p className='pt-5 md:w-[60%] md:mx-auto'>
              Once you have the foam, you will need adhesive spray. We recommend using 3M Hi-Strength 90 Contact Spray. Spray both the foam and the inner shell of the bass drum with the adhesive spray.
            </p>
            <img src={Spray} className='mx-auto w-[70%] md:w-[15%]'/>
      </section>

      <section className='text-sm md:text-lg px-5 pt-4 md:text-center'>
            <h1 className='text-2xl md:text-3xl font-bold'>Placing the Foam</h1>
            <p className='pt-5 md:w-[60%] md:mx-auto'>
             Place the foam on the inner shell. For smaller drums, you will want the foam to be flush with the shell, but for bigger drums, you will want to leave half an inch or an inch of the foam to be slightly sticking out from the shell.
            </p>
      </section>

      <Footer/>
    </>
  )
}

export default Muffling