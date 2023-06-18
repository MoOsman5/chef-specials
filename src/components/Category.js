import React from 'react';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Category.css'

const Category = ({filterByCategory,allCategory}) => {
  const onFilter=(cat)=>{
    filterByCategory(cat)

  }
  return (
      <Row className='my-3 mb-5'>
        <Col sm='12' className='d-flex justify-content-center'>
          {
            allCategory.length >0 ? (
              allCategory.map((cat)=>{
                return(
                  <div>
                    <button onClick={()=>onFilter(cat)} className='btn mx-2'>{cat}</button>
                  </div>
                )})
            ): (<h4>No category</h4>)
          }
          
        </Col>
      </Row>
  );
}

export default Category;
