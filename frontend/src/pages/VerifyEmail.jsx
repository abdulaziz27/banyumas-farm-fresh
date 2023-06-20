import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../common/header/Header';
import Wrapper from '../components/wrapper/Wrapper';
import axios from 'axios';

const VerifyEmail = () => {
    const { token } = useParams();
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                await axios.get(`http://localhost:3000/api/users/verify-email/${token}`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
                });
                setIsEmailVerified(true);
            } catch (error) {
                setIsEmailVerified(false);
            }
        };

        verifyEmail();
    }, [token]);

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <>
            <Header />
            <section className="main-container col1-layout">
                <div className="inside-col">
                    <div className="breadcrumbs-sec">
                        <div className="container">
                            <div className="breadcrumbs">
                                <ul>
                                    <li className="home">
                                        <Link to="/" title="go to home page">
                                            Home
                                        </Link>
                                        <span>/</span>
                                    </li>
                                    <li>
                                        <strong>Verify Email</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <article className="col-main">
                                <div className="account-login">
                                    <fieldset className="col2-set">
                                        <div className="registered-users text-center">
                                            {isEmailVerified ? (
                                                <div>
                                                    <h2>Verifikasi Email Berhasil!</h2>
                                                    <p>Akun Anda telah berhasil diverifikasi.</p>
                                                    <p>Silakan masuk dengan akun Anda.</p>
                                                    <button className="normal" onClick={handleLogin}>
                                                        Masuk
                                                    </button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h2>Verifikasi Email Gagal</h2>
                                                    <p>Terjadi kesalahan saat memverifikasi email Anda.</p>
                                                </div>
                                            )}
                                        </div>
                                    </fieldset>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Wrapper />
        </>
    );
};

export default VerifyEmail;