import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";
import Loader from "../../components/Loader";
import { fadeIn } from "../../variants";
import axios from "axios";
export const runtime = "experimental-edge";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    if (submitting) return;

    if (data.honeypot) {
      return;
    }

    setSubmitting(true);
    try {
      delete data.honeypot;
      const formData = {
        ...data,
        "form-name": "contact",
        "form-destination": "",
      };
      await axios.post("https://formkeep.com/f/babc8e8419cf", formData);
      setSubmitting(false);
      toast.success("Message sent successfully.");
      router.push("/thank-you");
    } catch (error) {
      setSubmitting(false);
      toast.error("Message failed to send.");
    }
  };
  return (
    <div className="h-full pb-24 bg-primary/30 md:pb-0">
      <div className="container flex justify-center h-full py-32 mx-auto overflow-y-auto text-center scrollbar-thin md:scrollbar-hide md:py-0 md:pt-28 xl:text-left">
        <Toaster position="top-right" />
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center h2"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            className="flex flex-col items-center flex-1 w-full gap-6 mx-auto md:items-start"
          >
            <div className="flex flex-col w-full gap-6 md:flex-row">
              <div className="flex flex-col flex-1">
                <input
                  type="text"
                  placeholder="name"
                  className="input"
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 80,
                    pattern: /^[A-Za-z.-]+$/,
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="text-red-500">Name is required.</span>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <span className="text-red-500">Name is too short.</span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <span className="text-red-500">Name is too long.</span>
                )}
              </div>
              <div className="flex flex-col flex-1">
                <input
                  type="text"
                  placeholder="email"
                  className="input-email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="text-red-500">Email is required.</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="text-red-500">Email is not valid.</span>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="phone"
                className="input"
                name="phone"
                {...register("phone", {
                  required: false,
                  pattern: /^[+0-9]{10,}$/i,
                })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <span className="text-red-500">Phone is required.</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <textarea
                placeholder="message"
                className="textarea"
                name="message"
                {...register("message", {
                  required: true,
                })}
              ></textarea>
              {errors.message && errors.message.type === "required" && (
                <span className="text-red-500">Message is required.</span>
              )}
            </div>
            <input
              type="text"
              name="honeypot"
              className="hidden"
              {...register("honeypot")}
              tabIndex="-1"
            />

            <button
              className="btn rounded-full border border-white/50 w-[170px]
										px-8 transition-all duration-300 flex items-center justify-center 
										overflow-hidden hover:border-accent group"
            >
              {submitting ? (
                <span className="w-10 h-10">
                  <Loader />
                </span>
              ) : (
                <>
                  <span
                    className="group-hover:-translate-y-[120%] group-hover:opacity-0
														transition-all duration-500"
                  >
                    Let&apos;s talk
                  </span>
                  <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:flex
														group-hover:translate-y-0 group-hover:opacity-100 transition-all 
														duration-300 absolute text-[22px]"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
