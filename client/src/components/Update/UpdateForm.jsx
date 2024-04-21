import React from 'react';

const UpdateForm = () => {
    return (
        <div>
            <h2>Update Food Item</h2>
            <form action="#">
                <div className="form_wrapper">
                    <div className="input_field">
                        <label>Food Name</label>
                        <input type="text"/>
                    </div>
                    <div className="input_field">
                        <label>Food Code</label>
                        <input type="text"/>
                    </div>
                    <div className="input_field">
                        <label>Food Image</label>
                        <input type="text"/>
                    </div>
                    <div className="input_field">
                        <label>Food Category</label>
                        <input type="text"/>
                    </div>
                    <div className="input_field">
                        <label>QTY</label>
                        <input type="text"/>
                    </div>
                    <div className="input_field">
                        <label>Price</label>
                        <input type="text"/>
                    </div>
                </div>
                <button className="submit_btn" type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;