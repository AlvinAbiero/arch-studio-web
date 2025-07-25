"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";
import ArrowIcon from "./ArrowIcon";

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const variants = {
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

type FormValues = {
  name: string;
  email: string;
  message: string;
  subscribe: string;
};

const ContactForm = () => {
  const { inViewRef, inView } = useIntersectionObserver();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {
    toast.success("Your message has been sent!");
    reset();
  };

  return (
    <motion.section
      ref={inViewRef}
      variants={variants}
      initial="hiddenBottom"
      animate={inView ? "visible" : "hiddenBottom"}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="lg:mb-56 md:mb-46 lg:mt-8 relative xl:max-w-8xl lg:max-w-7xl lg:mb-4 mb-24 mt-16 md:px-16 px-8"
    >
      <div className="grid grid-cols-1 gap-16 lg:gap-24 xl:gap-32 lg:grid-cols-[1fr_2fr] ">
        <h1 className="text-6xl font-semibold leading-[3.5rem] w-2/3 lg:w-4/5 md:text-7xl md:leading-[4rem] md:w-full md:text-center lg:text-7xl lg:leading-[4rem] mb-4 md:mb-8 md:self-center">
          Connect with us
        </h1>

        <motion.form
          ref={inViewRef}
          onSubmit={handleSubmit(onSubmit)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-[2.4rem]"
        >
          <motion.div
            variants={inputVariants}
            className="flex flex-col gap-[0.8rem]"
          >
            <input
              type="text"
              className="outline-none bg-transparent border-b-[0.1rem] border-b-solid border-b-black text-[1.4rem] text-black font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-gray-400 focus:border-b-[#79c8c7] focus:border-b-[0.1rem] p-4 focus:border-solid"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                validate: (value) => {
                  const trimmedValue = value.trim();
                  if (/^[A-Za-z]+$/.test(trimmedValue)) {
                    return "Name must be at least 3 characters";
                  } else if (!/^[A-Za-z]+$/.test(trimmedValue)) {
                    return "Name must consist of only letters";
                  }
                  return true;
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                {errors.name.message}
              </p>
            )}
          </motion.div>
          <motion.div
            variants={inputVariants}
            className="flex flex-col gap-[0.8rem]"
          >
            <input
              type="text"
              className="outline-none bg-transparent border-b-[0.1rem] border-b-solid border-b-black text-[1.4rem] text-black font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-gray-400 focus:border-b-[#79c8c7] focus:border-b-[0.1rem] p-4 focus:border-solid"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={inputVariants}
            className="flex flex-col gap-[0.8rem]"
          >
            <textarea
              className="resize-none outline-none bg-transparent border-b-[0.1rem] border-b-solid border-b-black text-[1.4rem] text-black font-[500] placeholder:text-[1.4rem] placeholder:font-semibold placeholder:leading-[2.5rem] placeholder:opacity-50 placeholder:w-full placeholder:text-gray-400 focus:border-b-[#79c8c7] focus:border-b-[0.1rem] px-4 py-6 focus:border-solid"
              rows={2}
              placeholder="Message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
                validate: (value) => {
                  const trimmedValue = value.trim();
                  if (trimmedValue.length < 10) {
                    return "Message must be at least 10 characters long";
                  }
                  return true;
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          <button
            type="submit"
            className="self-end outline-none border-[2px] border-white py-[1.5rem] px-[3rem] text-[1.8rem] font-semibold leading-[2.8rem] block  cursor-pointer bg-black"
          >
            <ArrowIcon />
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
