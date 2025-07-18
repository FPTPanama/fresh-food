'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import { LuSend } from 'react-icons/lu';
import emailjs from '@emailjs/browser';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { validEmail, validNombre, validPhone } from '@/utils/validations';
import ModalHrk from 'components/modal-hrk/modal-hrk';

const FormHrk = () => {
  const [nombre, setNombre] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [showErrorEmail, setshowErrorEmail] = useState(false);
  const [showErrorName, setShowErrorName] = useState(false);
  const [showErrorPhone, setShowErrorPhone] = useState(false);

  const emailError = validEmail(email);
  const nameError = validNombre(nombre);
  const phoneError = validPhone(phone);
  const isValid = emailError.ok && nameError.ok && phoneError.ok;

  const sendEmail = async () => {
    setShowModal(true);

    const dataSend = {
      name: nombre,
      email_contact: email,
      phone_contact: phone,
    };

    try {
      setLoadingResponse(true);

      const res = await emailjs.send('hrk_global_service_mail', 'hrk_template_email', dataSend, {
        publicKey: 'RpK5TowBV0ICJanq6',
      });

      if (res) {
      }
    } catch (error) {
      console.log(error);
    }

    setLoadingResponse(false);
  };

  return (
    <div className={'flex flex-col w-full gap-5 p-3'}>
      <ModalHrk showModal={showModal}>
        {loadingResponse ? (
          <p className={classNames('text-white', 'text-5xl', 'slide-fwd-center')}>Sending your contact</p>
        ) : (
          <div
            className={classNames(
              'flex',
              'flex-col',
              'md:w-1/2',
              'w-full',
              'h-1/2',
              'border-white',
              'rounded-3xl',
              'p-5',
              'justify-center',
              'items-center',
              'gap-4',
              'slide-fwd-center',
            )}
          >
            <MdOutlineMarkEmailRead size={400} color="white" />
            <div className={classNames('flex', 'flex-col', 'w-9/12', 'h-fit', 'md:items-center', 'md:justify-center')}>
              <p style={{ fontFamily: 'popBold' }} className={classNames('text-white', 'md:text-5xl', 'text-3xl', 'font-bold')}>
                Thanks for your message.
              </p>
              <p style={{ fontFamily: 'popThin' }} className={classNames('text-white', 'md:text-5xl', 'text-3xl')}>
                {' '}
                We will contact to you soon.
              </p>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className={classNames(
                'text-white',
                'border-white',
                'border-2',
                'h-40',
                'px-24',
                'rounded-2xl',
                'hover:text-xl',
                'hover:px-28',
                'transition-all',
              )}
            >
              Done
            </button>
          </div>
        )}
      </ModalHrk>

      <div className={'flex flex-col justify-center items-center gap-5 w-full text-greendark'}>
        <div className={'flex flex-col justify-center items-start w-full gap-3'}>
          <label
            htmlFor=""
            className={classNames({ 'text-primary': nameError.ok || nombre === null }, { 'text-red-600': !nameError.ok && nombre !== null })}
          >
            Name
          </label>
          <input
            className={classNames(
              'border',
              'border-greendark',
              'bg-transparent',
              'px-4',
              'py-2',
              'rounded-2xl',
              'w-full',
              { 'border-primary text-primary': phoneError.ok || phone === null },
              { 'border-red-600 text-red-600': !phoneError.ok && phone !== null },
            )}
            type="text"
            onChange={e => {
              setNombre(e.target.value);
            }}
          />

          <div className="h-2">
            {!nameError.ok && nombre !== null && (
              <p className={classNames({ 'text-red-600': !nameError.ok }, { 'text-green-600': nameError.ok }, 'text-xs', 'mt-1')}>
                {nameError.mensaje}
              </p>
            )}
          </div>
        </div>
        <div className={'flex flex-col justify-center items-start w-full gap-3'}>
          <label
            htmlFor="Email"
            className={classNames({ 'text-primary': emailError.ok || email === null }, { 'text-red-600': !emailError.ok && email !== null })}
          >
            Email
          </label>
          <input
            className={classNames(
              'border',
              'border-greendark',
              'bg-transparent',
              'px-4',
              'py-2',
              'rounded-2xl',
              'w-full',
              { 'border-primary text-primary': phoneError.ok || phone === null },
              { 'border-red-600 text-red-600': !phoneError.ok && phone !== null },
            )}
            id={'email'}
            type="email"
            onChange={e => {
              setEmail(e.target.value);
              setshowErrorEmail(!emailError.ok);
            }}
          />

          <div className="h-2">
            {!emailError.ok && email !== null && (
              <p className={classNames({ 'text-red-600': !emailError.ok }, { 'text-green-600': emailError.ok }, 'text-xs', 'mt-1')}>
                {emailError.mensaje}
              </p>
            )}
          </div>
        </div>

        <div className={'flex flex-col justify-center items-start w-full gap-3'}>
          <label
            htmlFor=""
            className={classNames({ 'text-primary': phoneError.ok || phone === null }, { 'text-red-600': !phoneError.ok && phone !== null })}
          >
            Phone
          </label>
          <input
            style={{ unset: 'all' }}
            type="telephone"
            className={classNames(
              'border',
              'border-greendark',
              'bg-transparent',
              'px-4',
              'py-2',
              'rounded-2xl',
              'w-full',
              { 'border-primary text-primary': phoneError.ok || phone === null },
              { 'border-red-600 text-red-600': !phoneError.ok && phone !== null },
            )}
            onChange={e => {
              setPhone(e.target.value);
              setShowErrorPhone(!phoneError.ok);
            }}
          />
          <div className="h-2">
            {!phoneError.ok && phone !== null && (
              <p className={classNames({ 'text-red-600': !phoneError.ok }, { 'text-green-600': phoneError.ok }, 'text-xs', 'mt-1')}>
                {phoneError.mensaje}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className={classNames('flex items-center justify-center h-20')}>
        <button
          className={classNames(
            'flex justify-center items-center p-3 w-full box-border rounded-2xl gap-3',
            { ' bg-greendark text-white': isValid },
            { 'bg-transparent text-primary text-greendark shadow-xl': !isValid },
          )}
          onClick={() => {
            isValid && sendEmail();
          }}
        >
          Send <LuSend />
        </button>
      </div>
    </div>
  );
};

export default FormHrk;
