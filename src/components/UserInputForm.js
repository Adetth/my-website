import React, { useState } from 'react';
import app from '../config/firebase';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const UserInputForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(''); // For success/error messages
  const [isLoading, setIsLoading] = useState(false); // Track form submission state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (expand as needed)
    if (!name || !email.trim()) {
      setMessage('Please enter your name and email.');
      return;
    }

    setIsLoading(true); // Show loading indicator while submitting

    try {
      const db = getFirestore(app); // Get Firestore instance
      const userRef = collection(db, "testData"); // Reference to your collection
      
      const time = Math.floor(Date.now() / 1000);
      console.log(time);

      // Add user data to Firestore
      await addDoc(userRef, {
        email,
        name,
        phone,
        time
      });

      // setName(''); // Clear form fields after successful submission
      // setEmail('');
      // setPhone('');
      setMessage('Data recorded successfully!'); // Success message
    } catch (error) {
      console.error("Error adding document:", error);
      setMessage('An error occurred. Please try again later.'); // Error message
    } finally {
      setIsLoading(false); // Hide loading indicator after submission
    }
  };

  return (
    <body class="body-class">
    <form onSubmit={handleSubmit}>
      <div class="card">
                <a class="singup">Enter your details</a>
                <div class="inputBox1">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <span class="user">Full name</span>
                </div>
        
                <div class="inputBox2">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <span>Email</span>
                </div>
        
                <div class="inputBox">
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <span>Phone number</span>
                </div>
                <div class="button">
                <button type="submit" class="enter" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
                </div>
                {message && <p className="message">{message}</p>}
            </div>

    </form>
    </body>
  );
};

export default UserInputForm;
