import React from 'react';
import { Row ,Card} from 'react-bootstrap';
import '../styles/Item.css'


const Item = ({item}) => {
  return (
      <Row>
        <Card className='card'>
            <Card.Img className='img-item' variant="top" src={item.imgURL} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text py-2>
                <div className='item-description'>
                  {item.discription}
                </div>
              </Card.Text>
              <Card.Text py-2>
                <div className='item-price'>
                    {item.price}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
      </Row>
  );
}

export default Item;
