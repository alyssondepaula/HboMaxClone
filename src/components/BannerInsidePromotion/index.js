import React from 'react';

import { Banner, Container, TextTitle, TextDescription, TextButton,Button } from './styles';



const BannerInsidePromotion = ({title, description, img, textButton}) => {
  return (<Container>
    <Banner img={img}/>
      { title       ? <TextTitle>{title}</TextTitle> : null}
      { description ? <TextDescription>{description}</TextDescription>: null}
      <Button>
        <TextButton>{textButton}</TextButton>
      </Button>
    </Container>
  
  );
}

export default BannerInsidePromotion;