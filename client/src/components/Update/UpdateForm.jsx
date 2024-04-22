import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {

    let navigate = useNavigate();
    let {id} = useParams();

    let [Existing, setExisting] = useState(null);

    const ExistingInfo = async (id)=> {
        let res = await axios.get(`/api/readByID/${id}`);
        setExisting(res.data['food'][0]);
    }

    useEffect(() => {
        (async ()=> {
            await ExistingInfo(id);
        })()
    }, []);

    const UpdateData = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let FoodName = formData.get('FoodName');
        let FoodCode = formData.get('FoodCode');
        let FoodImg = formData.get('FoodImg');
        let FoodCategory = formData.get('FoodCategory');
        let FoodQTY = formData.get('FoodQTY');
        let FoodPrice = formData.get('FoodPrice');

        await axios.post(`/api/update/${id}`, {
            FoodName: FoodName,
            FoodCode: FoodCode,
            FoodImg: FoodImg,
            FoodCategory: FoodCategory,
            FoodQTY: FoodQTY,
            FoodPrice: parseInt(FoodPrice),
        })
        navigate("/");
    }

    return (
        <div>
            <h2>Update Food Item</h2>
            <form onSubmit={UpdateData}>
                <div className="form_wrapper">
                    <div className="input_field">
                        <label>Food Name</label>
                        <input defaultValue={Existing !== null ? (Existing['FoodName']):("")} type="text" name="FoodName"/>
                    </div>
                    <div className="input_field">
                        <label>Food Code</label>
                        <input defaultValue={Existing !== null ? (Existing['FoodCode']):("")} type="text" name="FoodCode"/>
                    </div>
                    <div className="input_field">
                        <label>Food Image</label>
                        <input defaultValue={Existing !== null ? (Existing['FoodImg']):("")} type="text" name="FoodImg"/>
                    </div>
                    <div className="input_field">
                        <label>Food Category</label>
                        <input defaultValue={Existing !== null ? (Existing['FoodCategory']):("")} type="text" name="FoodCategory"/>
                    </div>
                    <div className="input_field">
                        <label>QTY</label>
                        <input defaultValue={Existing !== null ? (Existing['FoodQTY']):("")} type="text" name="FoodQTY"/>
                    </div>
                    <div className="input_field">
                        <label>Price</label>
                        <input defaultValue={Existing !== null ? (Existing['FoodPrice']):("")} type="text" name="FoodPrice"/>
                    </div>
                </div>
                <button className="submit_btn" type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;