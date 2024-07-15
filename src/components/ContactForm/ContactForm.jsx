import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ru from 'react-phone-input-2/lang/ru.json';
import './ContactForm.css';

import { fadeIn } from '../../variants';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    queryType: 'sayHi',
    agreePolicy: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    agreePolicy: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
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

  const validatePolicy = () => {
    const { agreePolicy } = formData;
    if (!agreePolicy) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        agreePolicy: 'Необходимо согласиться с политикой конфиденциальности',
      }));
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      agreePolicy: '',
    }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const isPhoneValid = validatePhone();
    const isPolicyValid = validatePolicy();

    if (isNameValid && isEmailValid && isMessageValid && isPhoneValid && isPolicyValid) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: '',
        queryType: 'sayHi',
        agreePolicy: false,
      });
      setErrors({
        name: '',
        email: '',
        message: '',
        phone: '',
        agreePolicy: '',
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
        <form onSubmit={handleSubmit} className="">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              className="w-full p-4 custom-input rounded-3xl focus:outline-none focus:ring-2 focus:ring-brandPrimary"
            />
            {errors.name && <p className="text-red-500 ml-3 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 custom-input mt-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-brandPrimary"
            />
            {errors.email && <p className="text-red-500 ml-3 text-sm mt-1">{errors.email}</p>}
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
              className='mt-6'
            />
            {errors.phone && <p className="text-red-500 ml-3 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Сообщение"
              className="w-full h-40 p-4 custom-input mt-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-brandPrimary resize-none"
            ></textarea>
            {errors.message && <p className="text-red-500 ml-3 text-sm">{errors.message}</p>}
          </div>
          <div className="flex items-center ml-3 mt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreePolicy"
                checked={formData.agreePolicy}
                onChange={handleChange}
                id="agreePolicy"
                className="mr-2 cursor-pointer"
              />
              <span className="text-sm text-gray-700 cursor-pointer">
                Я соглашаюсь с политикой конфиденциальности
              </span>
            </label>
          </div>
          {errors.agreePolicy && <p className="text-red-500 text-sm mt-1 ml-3">{errors.agreePolicy}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-brandPrimary mt-6 lg:text-lg text-md text-white py-2 px-2 md:px-4 transition-all duration-300 rounded-3xl lg:hover:bg-neutralDGrey cursor-pointer"
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
