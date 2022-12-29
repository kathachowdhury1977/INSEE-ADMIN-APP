import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import ProductClassficationPopup from "../../../components/ModalPopup/ProductClassficationPopup"

function ProductClassification(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const ProductClassification = useSelector((state) => state.productclassificationlist.productclassificationlist);

  useEffect(() => {
    dispatch(eventActions.productClassificationList());
  }, []);

  console.log("ProductClassification", ProductClassification);

  return (
    <>
      <div className="content-wrapper">
        <Header title="Product Classification Master" />

        <div className="row">
          <div className="mainScroll">
            <div className="col-12 view_section">
              <div className="row">
                <div className="col-7 text-left guide_month_year">
                 
                </div>
                <div className="col-5">
                  <div className="button_popup">
                      <ProductClassficationPopup title="Add Product Classification"/>
                    
                  </div>
                </div>
              </div>

              <div className="table-responsive">

                <table class="table table-bordered guideline_table mt-2">
                  <thead>
                    <tr>
                     
                      <th className="text-left">Product Name</th>
                      <th>product Id</th>
                      <th>product Type</th>
                   
        
                    </tr>
                  </thead>
                  <tbody>
                    {ProductClassification
                      ? ProductClassification.map((item) => {
                        return (
                          <tr>
                             <td className="text-left">{item.name}</td>
                            <td>{item.productId}</td>
                            <td>{item.productType}</td>
                          
                          </tr>
                        ); 
                       })
                      : null
                    } 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(ProductClassification);
