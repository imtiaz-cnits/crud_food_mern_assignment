import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateForm = () => {

    let navigate = useNavigate();

    const CreateData = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let FoodName = formData.get('FoodName');
        let FoodCode = formData.get('FoodCode');
        let FoodImg = formData.get('FoodImg');
        let FoodCategory = formData.get('FoodCategory');
        let FoodQTY = formData.get('FoodQTY');
        let FoodPrice = formData.get('FoodPrice');

        await axios.post('https://crud-food-mern-assignment.vercel.app/api/create', {
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
            <h2>Create Food Item</h2>
            <form onSubmit={CreateData}>
                <div className="form_wrapper">
                    <div className="input_field">
                        <label>Food Name</label>
                        <input type="text" name="FoodName"/>
                    </div>
                    <div className="input_field">
                        <label>Food Code</label>
                        <input type="text" name="FoodCode"/>
                    </div>
                    <div className="input_field">
                        <label>Food Image</label>
                        <input type="text" name="FoodImg"/>
                    </div>
                    <div className="input_field">
                        <label>Food Category</label>
                        <input type="text" name="FoodCategory"/>
                    </div>
                    <div className="input_field">
                        <label>QTY</label>
                        <input type="text" name="FoodQTY"/>
                    </div>
                    <div className="input_field">
                        <label>Price</label>
                        <input type="text" name="FoodPrice"/>
                    </div>
                </div>
                <button className="submit_btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateForm;