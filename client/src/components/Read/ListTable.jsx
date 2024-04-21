import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../Common/Loader.jsx";
import {Link} from "react-router-dom";
import image from "../../assets/images/food_img_1.png"

const ListTable = () => {

    const [Data, SetData] = useState([]);

    useEffect(() => {
        ( async ()=>{
            let res = await axios.get( "/api/read" );
            SetData(res.data["food"])
        })()
    }, []);

    return (
        <div>
            <h2>All Food List</h2>
            <div className="row">
                {
                    Data.length === 0 ? (<Loader/>) : (
                        Data.map((food, i) => {
                            return (
                                <div className="col-md-3">
                                    <div className="food_card" key={i}>
                                        <div className="food_img">
                                            <img src={food['FoodImg']} alt=""/>
                                            <span>{food["FoodPrice"]}</span>
                                        </div>
                                        <div className="food_content">
                                            <p>{food["FoodName"]}</p>
                                            <Link to="/update" className="edit_btn">Edit</Link>
                                            <button type="button" className="delete_btn">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    );
};

export default ListTable;