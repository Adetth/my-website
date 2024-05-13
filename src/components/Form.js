import '../App.css';
import React, { useState } from 'react';
import app from '../config/firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Form = () => {
    const [name, setName] = useState('');
    const [usn, setUsn] = useState('');
    const [attending, setAttending] = useState('');
    const [message, setMessage] = useState(''); // For success/error messages
    const [isLoading, setIsLoading] = useState(false); // Track form submission state

    const handleSubmit = async (e) => {
    e.preventDefault();


    setIsLoading(true); // Show loading indicator while submitting

    try {
      const db = getFirestore(app); // Get Firestore instance
      const userRef = collection(db, "testData"); // Reference to your collection
      
      const time = Math.floor(Date.now() / 1000);
      console.log(time);

      // Add user data to Firestore
      await addDoc(userRef, {
        usn,
        name,
        attending,
        time
      });

      setName(''); // Clear form fields after successful submission
      setUsn('');
      setAttending('');
      setMessage('User data submitted successfully!'); // Success message
    } catch (error) {
      console.error("Error adding document:", error);
      setMessage('An error occurred. Please try again later.'); // Error message
    } finally {
      setIsLoading(false); // Hide loading indicator after submission
    }
  };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="card">
                        <a className="singup">Enter your details</a>
                        <div className="inputBox1">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                            <span className="user">Full name</span>
                        </div>
                
                        <div className="inputBox2">
                            <input type="text" value={usn} onChange={(e) => setUsn(e.target.value)} required/>
                            <span>USN</span>
                        </div>
                
                        <div className="inputBox">
                            <input type="text" value={attending} onChange={(e) => setAttending(e.target.value)} required/>
                            <span>Attending? (y/n)</span>
                        </div>
                        <div className="button">
                        <button className="enterForm" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Form;