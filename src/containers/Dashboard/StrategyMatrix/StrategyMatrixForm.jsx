import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { useForm } from 'react-hook-form';

function StrategyMatrixForm(props) {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let history = useHistory();
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState("");
    const [area, setArea] = React.useState("");
    const [strategy, setStrategy] = React.useState("");
    const [focus, setFocus] = React.useState("");
    const [farming, setFarming] = React.useState("");
    const [hunting, setHunting] = React.useState("");
    const [small, setSmall] = React.useState("");
    const [hot, setHot] = React.useState("");
    const [standard, setStandard] = React.useState("");
    const addstrategy = useSelector((state) => state.addstrategymatrix);

    console.log("focus", focus)

    const onSubmit = (data) => {
        console.log("data", data);
        dispatch(eventActions.addStrategyMatrix(data));
        history.push("/StrategyMatrix");
    };


    useEffect(() => {
        if (addstrategy && addstrategy.addstrategymatrix !== undefined) {
            dispatch(eventActions.getStrategyMatrix());
        }
    }, [addstrategy])

    return (
        <>
            <div className="content-wrapper">
                <Header title="Add Strategy Matrix" />


                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 form_section">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label for="name">Month</label>
                                            <select name="" id="" onChange={event => setMonth(event.target.value)}>
                                                <option value="January">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="May">May</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="September">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label for="name">Year</label>
                                            <select name="" id="" onChange={event => setYear(event.target.value)}>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label for="areatype">Area Type</label>
                                            <select name={"area"} onChange={event => setArea(event.target.value)}>
                                                <option value="">area type</option>
                                                <option value="Rural">Rural</option>
                                                <option value="Urban">Urban</option>
                                                <option value="Semi-Urban">Semi-Urban</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="strategytype">Strategy Type</label>
                                            <select name={"strategy"} onChange={event => setStrategy(event.target.value)}>
                                                <option value="">strategy type</option>
                                                <option value="Maintain">Maintain</option>
                                                <option value="SOW Increase">SOW Increase</option>
                                                <option value="Cust Increase">Cust Increase</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div class="form-group">
                                            <label for="role">Focus</label>
                                            <input type="text" name="focus" className={`form-control ${errors.focustType ? 'is-invalid' : ''}`} placeholder="enter focus" onChange={event => setFocus(event.target.value)} {...register('focustType', { required: true })} />
                                            {errors.focustType && <p className="require_css">Focus is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-group">
                                            <label for="segment">Farming</label>
                                            <input type="text" name={"farming"} className={`form-control ${errors.farmingType ? 'is-invalid' : ''}`} placeholder="Enter Farming" onChange={event => setFarming(event.target.value)} {...register('farmingType', { required: true })} />
                                            {errors.farmingType && <p className="require_css">Farming is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-group">
                                            <label for="managerid">Hunting</label>
                                            <input type="text" onChange={event => setHunting(event.target.value)} name={"hunting"} className={`form-control ${errors.huntingType ? 'is-invalid' : ''}`} placeholder="Enter hunting" {...register('huntingType', { required: true })} />
                                            {errors.huntingType && <p className="require_css">Hunting is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-group">
                                            <label for="division">Small</label>
                                            <input type="text" onChange={event => setSmall(event.target.value)} name={"small"} className={`form-control ${errors.smallType ? 'is-invalid' : ''}`} placeholder="Enter small" {...register('smallType', { required: true })} />
                                            {errors.smallType && <p className="require_css">Small is required.</p>}
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div class="form-group">
                                            <label for="division">Hot</label>
                                            <input type="text" onChange={event => setHot(event.target.value)} name={"hot"} className={`form-control ${errors.hotType ? 'is-invalid' : ''}`} placeholder="Enter hot value"  {...register('hotType', { required: true })} />
                                            {errors.hotType && <p className="require_css">Hot is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-group">
                                            <label for="division">Standard</label>
                                            <input type="text" onChange={event => setStandard(event.target.value)} name={"standard"} className={`form-control ${errors.standardType ? 'is-invalid' : ''}`} placeholder="Enter standard value" {...register('standardType', { required: true })} />
                                            {errors.standardType && <p className="require_css">Standard is required.</p>}
                                        </div>
                                    </div>


                                </div>

                                <div className="col-12 pl-0 mb-3 text-center">
                                    <button className="cancel_user">Cancel</button>
                                    <input className="input_submit" type="submit" value="Save" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default withTranslation()(StrategyMatrixForm);
