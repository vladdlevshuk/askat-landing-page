import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ru from 'react-phone-input-2/lang/ru.json';
import './ContactForm.css'

import { fadeIn } from '../../variants';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    queryType: 'sayHi',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

  const validateMessage = () => {
    if (formData.message.trim().length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Сообщение не может быть пустым',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      message: '',
    }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const isPhoneValid = validatePhone();

    if (isNameValid && isEmailValid && isMessageValid && isPhoneValid) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '',
        queryType: 'sayHi',
      });
      setErrors({
        name: '',
        email: '',
        message: '',
        phone: '',
      });
    }
  };

  return (
    <motion.div
      variants={fadeIn("", 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true, amount: 0.3 }}
      className='px-4'
      id='contacts'
    >
      <div className="max-w-2xl mx-auto my-16 lg:my-20 p-8 bg-white rounded-3xl shadow-md">
        <h2 className="md:text-4xl text-3xl font-semibold text-neutralDGrey mb-6 text-center">Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-full p-4 custom-input rounded-3xl focus:outline-none focus:ring-2 focus:ring-brandPrimary"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 custom-input rounded-3xl focus:outline-none focus:ring-2 focus:ring-brandPrimary"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <PhoneInput
              placeholder="Введите номер телефона"
              localization={ru}
              country={'ru'}
              value={formData.phone}
              onChange={handlePhoneChange}
              regions={'ex-ussr'}
              inputClass="w-full p-4 custom-input rounded-3xl focus:outline-none focus:ring-2 focus:ring-brandPrimary"
              buttonClass="rounded-l-3xl"
              dropdownClass="text-left"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Сообщение"
              className="w-full p-4 custom-input rounded-3xl focus:outline-none focus:ring-2 focus:ring-brandPrimary"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-brandPrimary lg:text-xl text-md text-white py-2 px-2 md:px-4 transition-all duration-300 rounded-3xl lg:hover:bg-neutralDGrey cursor-pointer"
            >
              Отправить сообщение
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;