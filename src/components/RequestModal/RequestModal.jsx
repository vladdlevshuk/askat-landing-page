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
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
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
    });
    setErrors({
      name: '',
      phone: '',
      email: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handlePhoneChange = (value, data) => {
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

  const handleSubmit = () => {
    setIsSubmitting(true);
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();

    if (isNameValid && isEmailValid && isPhoneValid) {
      console.log('Данные для отправки:', formData);
      resetForm();
      onClose();
    } else {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md mx-5">
        <div className="text-center">
          <h2 className="text-3xl text-neutralDGrey font-semibold mb-2">Оставить заявку</h2>
          <p className='text-neutralGrey text-sm mb-4'>Заполните форму ниже и мы свяжемся с вами, чтобы обсудить ваш бизнес-запрос</p>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-12 p-4 mb-1 border border-gray-300 rounded-3xl custom-input`}
          />
          {errors.name && !isSubmitting && (
            <p className="text-left ml-3 text-red-500 text-sm">{errors.name}</p>
          )}
          <PhoneInput
            placeholder="Введите номер телефона"
            localization={ru}
            country={'ru'}
            value={formData.phone}
            onChange={handlePhoneChange}
            regions={'ex-ussr'}
            inputClass={`w-full h-12 p-4 border border-gray-300 rounded-3xl pl-0`}
            containerClass="flex gap-8 mt-4"
            dropdownClass="text-left"
          />
          {errors.phone && !isSubmitting && (
            <p className="text-left ml-3 text-red-500 text-sm">{errors.phone}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 p-4 mt-4 mb-1 border border-gray-300 rounded-3xl custom-input`}
          />
          {errors.email && !isSubmitting && (
            <p className="text-left ml-3 text-red-500 text-sm">{errors.email}</p>
          )}
          <button
            onClick={handleSubmit}
            className="bg-brandPrimary mt-4 text-white py-2 px-4 transition-all duration-300 rounded-3xl lg:hover:bg-neutralDGrey w-full"
          >
            Подтвердить
          </button>
          <button
            onClick={onClose}
            className="mt-4 text-gray-500 transition-all duration-300 rounded-3xl lg:hover:text-brandPrimary"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
