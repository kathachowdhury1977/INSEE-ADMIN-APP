import React, {useEffect} from "react";
import { eventActions } from "../.././_actions";
import { useDispatch } from "react-redux";


function RetailerCheckbox(props) {
    const dispatch = useDispatch();
    const mycheckboxlist = props.autoRetailerField && props.autoRetailerField.groupCompanies;

    const [scccComp, setScccCompany] = React.useState();
    const [sccoComp, setSccoCompany] = React.useState();
    const [conwoodComp, setConwoodCompany] = React.useState();
    const [isubComp, setIsubCompany] = React.useState();
    const [iecoComp, setIecoCompany] = React.useState();
    const [myList, setMyList] = React.useState({
        "SCCC": scccComp,
        "SCCO": sccoComp,
        "CONWOOD": conwoodComp,
        "ISUB": isubComp,
        "IECO": iecoComp
    });

    console.log("myList",myList);
    console.log("scccCompscccComp",scccComp);
    

    useEffect(() => {   
        myListData();
    },[mycheckboxlist])
  
    const myListData = () => {
        const List = {...myList}
        List["SCCC"] = mycheckboxlist && mycheckboxlist.SCCC
        List["SCCO"] = mycheckboxlist && mycheckboxlist.SCCO
        List["CONWOOD"] = mycheckboxlist && mycheckboxlist.CONWOOD
        List["ISUB"] = mycheckboxlist && mycheckboxlist.ISUB
        List["IECO"] = mycheckboxlist && mycheckboxlist.IECO
        setMyList(List)
    }




    const myScccCheck = (e) => {
        const { checked } = e.target
        setScccCompany(checked === true ? true : false)
        console.log("checkedchecked",checked);
        const List = {...myList};
        List["SCCC"] = checked;
        setMyList(List);

    }

    const mySccoCheck = (e) => {
        
        const { checked } = e.target
        setSccoCompany(checked === true ? true : false)
        const List = {...myList};
        List["SCCO"] = checked;
        setMyList(List);
      
    }

    const myConwoodCheck = (e) => {
        const { checked } = e.target
        setConwoodCompany(checked === true ? true : false)
        const List = {...myList};
        List["CONWOOD"] = checked;
        setMyList(List);
    }

    const myIsubCheck = (e) => {
        const { checked } = e.target
        setIsubCompany(checked === true ? true : false)
        const List = {...myList};
        List["ISUB"] = checked;
        setMyList(List);
    }

    const myIecoCheck = (e) => {
        const { checked } = e.target
        setIecoCompany(checked === true ? true : false)
        const List = {...myList};
        List["IECO"] = checked;
        setMyList(List);
    }


    useEffect(() => {
        dispatch(eventActions.selectMultiCheckbox(myList));
    },[myList])







    return (
        <>
            <div className="lead-checkbox-container mt-3 row">
                <div className="col-2">
                    <input name="checkbox-1"
                        checked={myList.SCCC}
                        type="checkbox"
                        onChange={e => myScccCheck(e)}
                    />
                    <label > &nbsp;<strong>SCCC</strong></label>
                </div>

                <div className="col-2">
                    <input name="checkbox-1"
                         checked={myList.SCCO}
                        type="checkbox"
                        onChange={e => mySccoCheck(e)}
                    />
                    <label > &nbsp; <strong>SCCO</strong></label>
                </div>

                <div className="col-3">
                    <input name="checkbox-1"
                         checked={myList.CONWOOD}
                        type="checkbox"
                        onChange={e => myConwoodCheck(e)}
                    />

                    <label> &nbsp; <strong>CONWOOD</strong></label>
                </div>

                <div className="col-2">
                    <input type="checkbox" value="ISUB"
                         checked={myList.ISUB}
                        onChange={e => myIsubCheck(e)}

                    />

                    <label> &nbsp; <strong>ISUB</strong></label>
                </div>

                <div className="col-3">
                    <input type="checkbox"
                         checked={myList.IECO}
                        value="IECO"
                        onChange={e => myIecoCheck(e)}
                    />
                    <label> &nbsp; <strong>IECO</strong></label>
                </div>

            </div>

        </>
    );
}
export default RetailerCheckbox;
