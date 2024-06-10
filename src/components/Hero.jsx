/* eslint-disable react/prop-types */
import { SpacemanCanvas } from '.'

const Hero = ({ scrollContainer }) => {
    return (
        <div id="hero" className="parallax">
            <h1>Hero Section</h1>
            <SpacemanCanvas scrollContainer={scrollContainer} />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde esse repellat necessitatibus error consequuntur, iure minus sapiente delectus in nesciunt tempore, reprehenderit omnis rerum recusandae assumenda optio odio aspernatur dolor?
            </p>
        </div>
    )
}

export default Hero;