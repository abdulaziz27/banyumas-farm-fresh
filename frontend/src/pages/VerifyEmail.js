import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    <div>
      <h2>Email Verification</h2>
      {isEmailVerified ? (
        <>
          <p>Email verification successful</p>
          <button onClick={handleLogin}>Go to Login</button>
        </>
      ) : (
        <p>Failed to verify email</p>
      )}
    </div>
  );
};

export default VerifyEmail;