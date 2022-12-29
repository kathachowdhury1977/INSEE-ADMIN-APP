import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgSlider1 from "../../assets/img/default.jfif";
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import "./Slider.scss";
import ConfirmationBox from '../../components/MaterialTable/ConfirmationBox';
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom';
import imageLoader from "../../assets/img/loading.gif";

function ControlledCarousel(props) {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [imageDelete, setImageDelete] = React.useState('');
  const DeleteImage = useSelector((state) => state.deleteproductimage);
  const { productId } = location.state;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const description = props.sapDesc;

  const handleDelete = (event, myItemImage) => {
    setOpen(true);

    let productData = {};
    productData["productCode"] = description && description.ProductList.ccrz__ProductId__c;
    productData["productImageurl"] = [myItemImage];
    productData["productDesc"] = "";

    setImageDelete({ productData: productData, thumbnail: false });
  }

  console.log("imageDelete", imageDelete);

  useEffect(() => {
    if (DeleteImage && !DeleteImage.loading &&
      (DeleteImage.deleteproductimage)) {
      dispatch(eventActions.ProductImageGetList(productId && productId));
      toast.success('Product image deleted successfully', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

    }
  }, [DeleteImage]);

  useEffect(() => {
    return () => {
      dispatch(eventActions.deleteProductDetailImage())
    }
  }, [])

  console.log("props.imageproductId", props.imageproductId);



  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {props.imageproductId === undefined ? 
        <div className="imageLoader img-thumbnail">
          <img className="d-block" src ={imageLoader}/>
        </div> :
          props.imageproductId ? props.imageproductId.map((itemImage, index) => {

            return (

              <Carousel.Item key={index}>
                <div className="prod_image">
                  <img
                    className="d-block w-100 img-thumbnail"
                    src={itemImage}
                  />
                  {index === 0 ? '' : <i className="fa fa-trash" onClick={(event) => handleDelete(event, itemImage)}></i>}

                </div>
               
              </Carousel.Item>

            );
          })
            : <Carousel.Item>
              <img
                className="d-block w-100 img-thumbnail"
                src={imgSlider1}
              />
            </Carousel.Item>


        }
      </Carousel >
      <div>
        {imageDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductDetailImage(imageDelete)} open={open} setOpen={setOpen} />}
      </div>
    </>
  );
}

export default ControlledCarousel;