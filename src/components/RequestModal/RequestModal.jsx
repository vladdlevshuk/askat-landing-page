import React, { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ru from 'react-phone-input-2/lang/ru.json';
import './phoneInput.css';

const RequestModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agree: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    agree: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        resetForm();
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      resetForm();
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      agree: false,
    });
    setErrors({
      name: '',
      phone: '',
      email: '',
      agree: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
    setErrors({
      ...errors,
      phone: '',
    });
  };

  const validateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Введите корректный email',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }
    return isValid;
  };

  const validateName = () => {
    const { name } = formData;
    const isLengthValid = name.length >= 3;
    const isFormatValid = /^[a-zA-Zа-яА-Я]+$/.test(name);

    if (!isLengthValid || !isFormatValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: !isLengthValid ? 'Имя должно содержать минимум 3 символа' : 'Введите корректное имя (только буквы)',
      }));
      return false;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      name: '',
    }));
    return true;
  };

  const validatePhone = () => {
    const isValid = formData.phone.length > 9;
    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Введите корректный номер телефона',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: '',
      }));
    }
    return isValid;
  };

  const validateAgree = () => {
    if (!formData.agree) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        agree: 'Необходимо согласие с политикой конфиденциальности',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      agree: '',
    }));
    return true;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isAgreeValid = validateAgree();

    if (isNameValid && isEmailValid && isPhoneValid && isAgreeValid) {
      console.log('Данные для отправки:', formData);
      resetForm();
      onClose();
    } else {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white py-10 px-8 rounded-3xl shadow-lg w-full max-w-md mx-5 relative">
        <button
          className="absolute top-4 right-6 text-2xl font-bold text-neutralDGrey lg:hover:text-brandPrimary transition-all"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-3xl text-neutralDGrey font-semibold mb-6">Оформить заказ</h2>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-12 p-4 mb-1 border rounded-2xl ${errors.name ? 'border-red-500' : ''} custom-input custom-placeholder`}
          />
          {errors.name && !isSubmitting && (
            <p className="text-left ml-3 text-red-500 text-sm">{errors.name}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 p-4 mt-4 mb-1 border rounded-2xl ${errors.email ? 'border-red-500' : ''} custom-input custom-placeholder`}
          />
          {errors.email && !isSubmitting && (
            <p className="text-left ml-3 text-red-500 text-sm">{errors.email}</p>
          )}
          <PhoneInput
            placeholder="Введите номер телефона"
            localization={ru}
            country={'ru'}
            value={formData.phone}
            onChange={handlePhoneChange}
            regions={'ex-ussr'}
            inputClass={`w-full h-12 p-4 border border-gray-300 rounded-3xl pl-0 ${errors.phone ? 'border-red-500' : ''} custom-placeholder`}
            containerClass="flex gap-8 mt-4"
            dropdownClass="text-left"
          />
          {errors.phone && !isSubmitting && (
            <p className="text-left ml-3 text-red-500 text-sm">{errors.phone}</p>
          )}
          <textarea
            name="message"
            placeholder="Сообщение"
            value={formData.message}
            onChange={handleChange}
            maxLength={300}
            className={`w-full h-64 p-4 mt-4 border rounded-2xl ${errors.message ? 'border-red-500' : ''} custom-input resize-none custom-placeholder`}
          />
          <p className="text-left ml-3 text-gray-400 text-sm">
            {formData.message.length}/300 символов
          </p>
          <div className="flex items-center mt-4 ml-2">
            <input
              type="checkbox"
              id="agree-checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-3"
            />
            <label htmlFor="agree-checkbox" className={`text-gray-700 text-xs cursor-pointer select-none ${errors.agree ? 'text-red-500' : ''}`}>
              Я соглашаюсь с политикой конфиденциальности
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="btn-primary mt-6"
          >
            Отправить сообщение
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
