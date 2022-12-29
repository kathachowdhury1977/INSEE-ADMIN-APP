import React, { useState } from "react";
import "./DashboardLargeBox.scss";
import { withTranslation, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function DashboardLargeBox(props) {
  const [inputType] = useState(props.type);
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="dashboard_sectionBox">
        <div className="row w-100">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-2 mt-2">
            <div className="row">
              <div className="col-sm-8 col-lg-8 col-md-8">
                <Link to={props.src}>
                  <div className="row">
                    <div className="col-sm-3 col-lg-3 col-md-2 styleIcon">
                      <i class={props.faClass} aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-9 col-lg-9 col-md-9">
                      <p className="BlueText">{props.totalnumber}</p>
                      <p className="BlackText">{props.label}</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-sm-4 col-lg-4 col-md-4 leftLine">
                <p className="lightText">H - 20</p>
                <p className="lightText">M - 20</p>
                <p className="lightText">L - 20</p>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 case_summary mt-2">
            <div className="row">
              <div className="col-1 text-center case_sumaryOne">
                 <p>{t("label.emailinternal")}</p>
                 <span>10</span>
              </div>
              <div className="col-1 text-center case_sumaryTwo">
                 <p>{t("label.emailexternal")}</p>
                 <span>4</span>
              </div>
              <div className="col-1 text-center case_sumaryThree">
                <p>{t("label.phone")}</p>
                <span>3</span>
              </div>
              <div className="col-1 text-center case_sumaryFour">
                <p>{t("label.webchat")}</p>
                <span>6</span>

              </div>
              <div className="col-1 text-center case_sumaryFive">
                <p>{t("label.line")} / {t("label.zalo")} / {t("label.whatsapp")}</p>
                <span>6</span>

              </div>
              <div className="col-1 text-center case_sumarySix">
                <p>{t("label.chatbot")}</p>
                <span>9</span>
              </div>
              <div className="col-1 text-center case_sumarySeven">
                <p>{t("label.inseepluscustomer")}</p>
                <span>3</span>
                
              </div>
              <div className="col-1 text-center case_sumaryEight">
                <p>{t("label.inseeplusinternal")}</p>
                <span>5</span>
              </div>
              <div className="col-1 text-center case_sumaryNine">
                <p>{t("label.facebook")}</p>
                <span>5</span>
              </div>
            </div>
            {/* <p className="social-links">
              <span>{t("label.emailinternal")}</span>
              <span>{t("label.emailexternal")}</span>
              <span>{t("label.phone")}</span>
              <span>{t("label.webchat")}</span>
              <span>{t("label.line")} / {t("label.zalo")} / {t("label.whatsapp")}</span>
              <span>{t("label.chatbot")}</span>
              <span>{t("label.inseepluscustomer")}</span>
              <span>{t("label.inseeplusinternal")}</span>
              <span>{t("label.facebook")}</span>
            </p> */}
            {/* <p className="bottom-links">
              <span className="ml-one">10</span>
              <span className="ml-two">4</span>
              <span className="ml-three">3</span>
              <span className="ml-four">6</span>
              <span className="ml-five">6</span>
              <span className="ml-six">9</span>
              <span className="ml-seven">3</span>
              <span className="ml-eight">5</span>
              <span className="ml-nine">5</span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(DashboardLargeBox);

