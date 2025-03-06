// ContactForm.tsx
import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out! We\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.description}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={styles.input}
              placeholder="Your name"
              required
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={styles.input}
              placeholder="your.email@example.com"
              required
            />
          </div>

          {status.type && (
            <div
              style={
                status.type === 'success'
                  ? { ...styles.message, ...styles.successMessage }
                  : { ...styles.message, ...styles.errorMessage }
              }
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            style={isLoading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f2f5',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center' as const,
    fontSize: '24px',
  },
  description: {
    color: '#666',
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  label: {
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    padding: '12px',
    border: '2px solid #e1e1e1',
    borderRadius: '6px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#4a90e2',
    },
  },
  button: {
    padding: '14px',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#357abd',
    },
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  message: {
    padding: '12px',
    borderRadius: '6px',
    textAlign: 'center' as const,
  },
  successMessage: {
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
  },
  errorMessage: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    border: '1px solid #f5c6cb',
  },
};

export default ContactForm;