import './App.css'
import useWindowSize from '@rooks/use-window-size'
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
} from 'react-particle-image'

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y)
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50
  },
  color: ({ x, y, image }) => '#a4886a',
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 20,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2)
  },
}

const motionForce = (x: any, y: any) => {
  return forces.disturbance(x, y, 15)
}

function App() {
  const { innerWidth, innerHeight } = useWindowSize()

  return (
    <ParticleImage
      src={process.env.PUBLIC_URL + '/img/0xv002-comingsoon.png'}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={0.75}
      entropy={5}
      maxParticles={12000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#191D1F"
    />
  )
}

export default App
