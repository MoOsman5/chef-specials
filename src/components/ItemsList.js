import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Item from './Item';
const ItemsList = ({itemData}) => {
  return (
      <Row >
        {
          itemData.length >=1 ?(itemData.map((item)=>{
            return (
              <Col key={item.id} sm='4'  className='mb-3 g-5' >
                <Item item={item}/>
              </Col>
            )

          })):(<h3 className='text-center'>No meals</h3>)
        }

      </Row>
  );
}

export default ItemsList;
