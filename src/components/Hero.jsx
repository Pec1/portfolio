/* eslint-disable react/prop-types */
import { SpacemanCanvas } from '.'

const Hero = ({ scrollContainer }) => {
    return (
        <section className="parallax-stars relative min-h-screen flex justify-center items-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-end">
                    <div className='text-left w-1/2'>
                        <h1 className="text-6xl font-bold mb-4">PAULO VICTOR</h1>
                        <p className='text-2xl'>Desenvolvedor</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates labore recusandae quod non       
                        </p>
                    </div>
                </div>
                <div className="parallax">
                    <SpacemanCanvas scrollContainer={scrollContainer} />
                </div>
            </div>
        </section>
    )
}

export default Hero;