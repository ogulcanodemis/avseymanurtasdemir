import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contactInfo, setContactInfo] = useState({
        phone: '',
        email: '',
        address: '',
        whatsapp: '',
        working_hours: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://avseymanurtasdemir.com/backend/api/get_contacts.php');
                if (response.data.status === 'success') {
                    const contacts = response.data.data;
                    setContactInfo({
                        phone: contacts.phone?.value || '',
                        email: contacts.email?.value || '',
                        address: contacts.address?.value || '',
                        whatsapp: contacts.whatsapp?.value || '',
                        working_hours: contacts.working_hours?.value || ''
                    });
                }
            } catch (error) {
                console.error('İletişim bilgileri yüklenirken hata oluştu:', error);
                setError('İletişim bilgileri yüklenemedi.');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    return (
        <ContactContext.Provider value={{ contactInfo, loading, error }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};

export default ContactContext; 