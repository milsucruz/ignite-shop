import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/products'

export default function Porduct() {

  return(
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,00</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique odio fugiat expedita molestias enim inventore totam provident alias illum iure rem illo ab, quam architecto nostrum maiores distinctio, delectus voluptatum.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}