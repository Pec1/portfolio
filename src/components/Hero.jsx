/* eslint-disable react/prop-types */
import { SpacemanCanvas } from '.'

const Hero = ({ scrollContainer }) => {
    console.log('scrollContainer:', scrollContainer);
    return (
        <section className="parallax">
            <SpacemanCanvas scrollContainer={scrollContainer} />
        </section>
    )
}

export default Hero;