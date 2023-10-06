import { FormHero, ContainerHero, TituloHero } from './styles'
// import styles from './Hero.module.css'

const Hero = () => (
  <FormHero>
    <ContainerHero className="container">
      <TituloHero>
        As melhores vagas para tecnologia, design e artes visuais.
      </TituloHero>
    </ContainerHero>
  </FormHero>
)

export default Hero
