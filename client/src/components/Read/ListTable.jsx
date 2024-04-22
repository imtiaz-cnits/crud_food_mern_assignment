import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../Common/Loader.jsx";
import {Link} from "react-router-dom";

const ListTable = () => {

    const [Data, SetData] = useState([]);

    useEffect(() => {
        ( async ()=>{
            await ReadData();
        })()
    }, []);

    const ReadData = async ()=> {
        let res = await axios.get( "/api/read" );
        SetData(res.data['food']);
    }

    const DeleteData = async (id) => {
        await axios.get( `/api/delete/${id}` );
        await ReadData();
    }

    return (
        <div>
            <h2>All Food List</h2>
            <div className="row d-flex align-items-stretch">
                {
                    Data.length === 0 ? (<Loader/>) : (
                        Data.map((food, i) => {
                            return (
                                <div className="col-md-3 align-items-stretch d-flex">
                                    <div className="food_card" key={i}>
                                        <div className="food_img">
                                            <img src={food['FoodImg']} alt=""/>
                                            <span>Tk: {food["FoodPrice"]}</span>
                                        </div>
                                        <div className="food_content">
                                            <p>{food["FoodName"]}</p>
                                            <Link to={`/update/${food['_id']}`} className="edit_btn">Edit</Link>
                                            <button onClick={()=>DeleteData(food['_id'])} type="button" className="delete_btn">Delete</button>
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