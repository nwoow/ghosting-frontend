import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/MyContext';
import { baseUrl } from './Constant';
import axios from 'axios';
import { toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';

function CardCheckoutPage() {
    const navigate = useNavigate();
    const { cartItems } = useGlobalContext();
    const [names, setName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [citys, setCitys] = useState('');
    const [states, setStates] = useState('');
    const [zipcodes, setZipcodes] = useState('');
    const [loading, setLoading] = useState(false);

    const productUIDs = cartItems.map(product => ({ uid: product.uid }));

    const handleCheckOut = () => {
        setLoading(true);
        const token = JSON.parse(localStorage.getItem('token'));
        if (!token) {
            toast.error('Please login to proceed.');
            navigate('/login');
            setLoading(false);
            return;
        }
        const name = names;
        const email = emailId;
        const addressline = address;
        const phone = mobile;
        const state = states;
        const zipcode = zipcodes;
        const city = citys;
        const product_list = [...productUIDs];
        axios.post(`${baseUrl}/accounts/checkout/`, {
            name, email, addressline, phone, state, zipcode, city, product_list
        }, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then((res) => {
            const paymentUrl = res.data.payment_url;
            if (res.data.status === 200) {
                setLoading(false);
                window.location.href = paymentUrl;
            } else {
                toast.error('Something Went Wrong');
                setLoading(false);
            }
        })
        .catch((error) => {
            toast.error('An error occurred. Please try again.');
            setLoading(false);
        });
    };

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="check_out_form">
                            <div>
                                <h2 className="fw-bold text-secondary">Billing Details</h2>
                                <form className="row g-3">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="inputName4" className="form-label text-white">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName4"
                                            required
                                            value={names}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            required
                                            value={emailId}
                                            onChange={(e) => setEmailId(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="inputPhone4" className="form-label text-white">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPhone4"
                                            required
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="inputAddress" className="form-label text-white">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputAddress"
                                            required
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="inputCity" className="form-label text-white">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                            required
                                            value={citys}
                                            onChange={(e) => setCitys(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="inputState" className="form-label text-white">State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputState"
                                            required
                                            value={states}
                                            onChange={(e) => setStates(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="inputZip" className="form-label text-white">Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputZip"
                                            required
                                            value={zipcodes}
                                            onChange={(e) => setZipcodes(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="check_out_detail" style={{ maxWidth: '500px' }}>
                            <div>
                                <h3 className="text-white">Your Order</h3>
                                <hr style={{ color: '#f0b341' }} />

                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="fw-bold">Product</p>
                                    <p className="fw-bold">Price</p>
                                </div>
                                <hr className="hr" />

                                <div className='row '>
                                    {cartItems.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <div className='d-flex align-items-center justify-content-between '>
                                                <div>
                                                    {item && item.all_images?.length > 0 && (
                                                        <img
                                                            src={`${baseUrl}/${item.all_images[0].image}`}
                                                            className="pro_od_img"
                                                            style={{ width: '50px' }}
                                                            alt='product'
                                                        />
                                                    )}
                                                </div>
                                                <span className="fw-medium text-white">{item.product_name}</span>
                                                <div className="">
                                                    <span className="text-white">₹{item.dis_price}</span>
                                                </div>
                                            </div>
                                            <hr className="hr" />
                                        </React.Fragment>
                                    ))}

                                    <div className='d-flex align-items-center justify-content-between '>
                                        <p className='text-white fw-bold'>SubTotal</p>
                                        <p className='text-white fw-bold'>ghj</p>
                                    </div>
                                </div>

                                <h3 className="mb-3 text-white">Discount Code</h3>
                                <form>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Coupon Code"
                                            aria-label="Coupon Code"
                                            aria-describedby="button-addon2"
                                        />
                                        <button className="btn btn-outline-warning" type="button" id="button-addon2">
                                            Apply
                                        </button>
                                    </div>
                                </form>
                                <hr style={{ color: '#f0b341' }} />
                                
                                <div className="border border-warning p-3 rounded">
                                    <h5 className="text-white">PhonePe Payment Solutions</h5>
                                    <div className="order-para mt-3">
                                        <p>
                                            All UPI apps, Debit and Credit Cards, and NetBanking accepted |
                                            Powered by PhonePe
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-secondary" style={{ fontSize: '12px' }}>
                                        Your personal data will be used to process your order, support your
                                        experience throughout this website, and for other purposes described
                                        in our{' '}
                                        <Link to="/" className="text-decoration-none text-white fw-bold">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <button className="Btn-order" onClick={handleCheckOut}>
                                    {loading ? (
                                        <InfinitySpin
                                            visible={true}
                                            width="50"
                                            color="#4fa94d"
                                            ariaLabel="infinity-spin-loading"
                                        />
                                    ) : (
                                        'Place Order'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCheckoutPage;