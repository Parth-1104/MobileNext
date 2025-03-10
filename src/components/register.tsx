import React, { useState } from 'react';
import { X } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    salutation: 'Mr.', // Default value
    name: '',
    affiliation: 'Bennett University', // Default value
    enrollmentNo: '',
    role: '', // Student, Faculty, or Industry professional
    email: '',
    contactNo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Log the data being sent
      console.log('Sending form data:', formData);
      
      // Make an API call to your backend to handle the form submission
      const response = await fetch('../api/submit-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Get response as text first for debugging
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      // Try to parse as JSON if possible
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('Error parsing response as JSON:', parseError);
        throw new Error('Invalid response format from server');
      }
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit registration');
      }
      
      // Set success state if backend submission was successful
      setSubmitSuccess(true);
      
      // Close the modal after showing success message for 2 seconds
      setTimeout(() => {
        onClose();
        // Reset form after successful submission and modal close
        setFormData({
          salutation: 'Mr.',
          name: '',
          affiliation: 'Bennett University',
          enrollmentNo: '',
          role: '',
          email: '',
          contactNo: ''
        });
        setSubmitSuccess(false);
      }, 2000);
      
    } catch (error) {
      console.error('Registration failed:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-xl w-full max-w-md md:max-w-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6 overflow-y-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Register for Mobile Dev Conference 2025</h2>
            <p className="text-gray-600 mt-2">Fill out this form to secure your spot</p>
          </div>

          {submitSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
              <p className="font-medium">Registration successful!</p>
              <p className="text-sm mt-1">Your information has been submitted. Thank you for registering!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                  {submitError}
                </div>
              )}

              {/* 1. Salutation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">1. Salutation *</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="salutation-dr"
                      name="salutation"
                      value="Dr."
                      checked={formData.salutation === 'Dr.'}
                      onChange={() => handleRadioChange('salutation', 'Dr.')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="salutation-dr" className="ml-2 text-gray-700">Dr.</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="salutation-mr"
                      name="salutation"
                      value="Mr."
                      checked={formData.salutation === 'Mr.'}
                      onChange={() => handleRadioChange('salutation', 'Mr.')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="salutation-mr" className="ml-2 text-gray-700">Mr.</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="salutation-ms"
                      name="salutation"
                      value="Ms."
                      checked={formData.salutation === 'Ms.'}
                      onChange={() => handleRadioChange('salutation', 'Ms.')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="salutation-ms" className="ml-2 text-gray-700">Ms.</label>
                  </div>
                </div>
              </div>

              {/* 2. Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">2. Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* 3. Affiliation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">3. Affiliation *</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="affiliation-bennett"
                      name="affiliation"
                      value="Bennett University"
                      checked={formData.affiliation === 'Bennett University'}
                      onChange={() => handleRadioChange('affiliation', 'Bennett University')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="affiliation-bennett" className="ml-2 text-gray-700">Bennett University</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="affiliation-other"
                      name="affiliation"
                      value="Other"
                      checked={formData.affiliation === 'Other'}
                      onChange={() => handleRadioChange('affiliation', 'Other')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="affiliation-other" className="ml-2 text-gray-700">Other</label>
                  </div>
                </div>
              </div>

              {/* 4. Enrollment No./Emp ID */}
              <div>
                <label htmlFor="enrollmentNo" className="block text-sm font-medium text-gray-700 mb-2">4. Enrollment No./Emp ID *</label>
                <input
                  type="text"
                  id="enrollmentNo"
                  name="enrollmentNo"
                  required
                  value={formData.enrollmentNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="The value must be a number"
                />
                <p className="text-xs text-gray-500 mt-1">The value must be a number</p>
              </div>

              {/* 5. Your role in your firm */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">5. Your role in your firm *</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="role-student"
                      name="role"
                      value="Student"
                      checked={formData.role === 'Student'}
                      onChange={() => handleRadioChange('role', 'Student')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="role-student" className="ml-2 text-gray-700">Student</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="role-faculty"
                      name="role"
                      value="Faculty"
                      checked={formData.role === 'Faculty'}
                      onChange={() => handleRadioChange('role', 'Faculty')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="role-faculty" className="ml-2 text-gray-700">Faculty</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="role-professional"
                      name="role"
                      value="Industry professional"
                      checked={formData.role === 'Industry professional'}
                      onChange={() => handleRadioChange('role', 'Industry professional')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="role-professional" className="ml-2 text-gray-700">Industry professional</label>
                  </div>
                </div>
              </div>

              {/* 6. Email ID */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">6. Email ID *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>

              {/* 7. Contact No. */}
              <div>
                <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-2">7. Contact No. *</label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  required
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="The value must be a number"
                />
                <p className="text-xs text-gray-500 mt-1">The value must be a number</p>
              </div>

              <div className="py-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;