import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";

function StrategyMatrix(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const strategymatrixList = useSelector((state) => state.getstrategy.getstrategy);

  useEffect(() => {
    dispatch(eventActions.getStrategyMatrix());
  }, []);

  console.log("strategymatrixList", strategymatrixList && strategymatrixList[0].month);

  return (
    <>
      <div className="content-wrapper">
        <Header title="Strategy Matrix" />

        <div className="row">
          <div className="mainScroll">
            <div className="col-12 view_section">
              <div className="row">
                <div className="col-9 text-left guide_month_year">
                  <span><b>Month: </b>{strategymatrixList && strategymatrixList[1].month}</span>
                  <span className="ml-3"><b>Year: </b>{strategymatrixList && strategymatrixList[1].year}</span>
                </div>
                <div className="col-3">
                  <div className="button_popup">

                    <Link to="/StrategyMatrixForm" className="ml-3 add-button">Add Strategy Matrix</Link>
                  </div>
                </div>
              </div>

              <div className="table-responsive">

                <table class="table table-bordered guideline_table mt-2">
                  <thead>
                    <tr>
                      <th>Area Type</th>
                      <th>Farming</th>
                      <th>Focus</th>
                      <th>Hot</th>
                      <th>Hunting</th>
                      <th>Small</th>
                      <th>Standard</th>
                      <th>Strategy Type</th>
        
                    </tr>
                  </thead>
                  <tbody>
                    {strategymatrixList
                      ? strategymatrixList.map((strategylist) => {
                        return (
                          <tr>
                            <td>{strategylist.areaType}</td>
                            <td>{strategylist.farming}</td>
                            <td>{strategylist.focus}</td>
                            <td>{strategylist.hot}</td>
                            <td>{strategylist.hunting}</td>
                            <td>{strategylist.small}</td>
                            <td>{strategylist.standard}</td>
                             <td>{strategylist.strategyType}</td>
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

export default withTranslation()(StrategyMatrix);
