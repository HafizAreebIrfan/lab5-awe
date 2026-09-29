import { useState } from 'react';
import styles from '../styles/login.module.css';

const Login = () => {
    const [message, setMessage] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);

    const contacts = [
        'Ali Khan',
        'Ahmed Raza',
        'Sara Ahmed',
        'Usman Malik',
        'Fatima Noor',
    ];

    const handleformsubmit = (e) => {
        e.preventDefault();

        setMessage('Login successful! Welcome back.');
    };

    return (
        <div className={styles.loginwrapper}>

            {/* Left Sidebar */}
            <div className={styles.loginsidebar}>
                <h1>Contacts</h1>

                <div className={styles.contactslist}>
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className={`${styles.contactbox} ${
                                selectedContact === contact
                                    ? styles.activeContact
                                    : ''
                            }`}
                            onClick={() => setSelectedContact(contact)}
                        >
                            <div className={styles.conboxicon}>
                                {contact.charAt(0)}
                            </div>

                            <div className={styles.contactname}>
                                {contact}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Login Container */}
            <div className={styles.logincontainer}>
                <h1>Login</h1>

                <form
                    className={styles.loginform}
                    onSubmit={handleformsubmit}
                >
                    <input
                        type="email"
                        placeholder="Enter Email"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        required
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>

                {message && (
                    <p className={styles.successmessage}>
                        {message}
                    </p>
                )}

                {selectedContact && (
                    <p className={styles.selectedcontact}>
                        Selected contact: <strong>{selectedContact}</strong>
                    </p>
                )}
            </div>

        </div>
    );
};

export default Login;
