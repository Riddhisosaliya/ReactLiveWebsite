import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fname: "",
        email: "",
        phono: "",
        area: "",
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fname}.My email is ${data.email}.My phono is ${data.phono}.Message is ${data.area}`)
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div my-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Enter Name:</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={inputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Enter Email:</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Enter Phono:</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phono" value={data.phono} onChange={inputEvent} placeholder="123-456-7890" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="area" value={data.area} onChange={inputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;









// import React, { useState } from "react";

// const Contact = () => {

//     const [name, setname] = useState({
//         fname: "",
//         email: "",
//         phono: "",
//         area: "",
//     });

//     const inputEvent = (event) => {
//         const { value, name } = event.target;
//         setname((prevalue) => {
//             return {
//                 ...prevalue,
//                 [name]: value,
//             }
//         });
//     };

//     return (
//         <>
//             <form>
//                 <div>
//                     <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name.fname} name="fname" />
//                     <input type="email" placeholder="Enter your email" onChange={inputEvent} value={name.email} name="email" />
//                     <input type="phono" placeholder="Enter your phono" onChange={inputEvent} value={name.phono} name="phono" />
//                     <input type="text" placeholder="Message" onChange={inputEvent} value={name.area} name="area" />
//                 </div>
//             </form>
//         </>
//     );
// };

// export default Contact;