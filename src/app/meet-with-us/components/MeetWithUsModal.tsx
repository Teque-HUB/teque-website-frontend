import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";
import { style } from "@/utils/config";
import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  needs: string;
  date: string;
  agree: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  needs?: string;
  date?: string;
  agree?: string;
}

interface ModalProps {
  modal: {
    isOpen: boolean;
    close: () => void;
  };
}

const MeetWithUsModal: React.FC<ModalProps> = ({ modal }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    needs: "",
    date: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validations
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.needs.trim()) {
      newErrors.needs = "Please describe your needs";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.agree) {
      newErrors.agree = "You must agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const sendEmail = async (formData: FormData) => {
    try {
      const response = await fetch("https://api.useplunk.com/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PLUNK_API_KEY}`,
        },
        body: JSON.stringify({
          to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
          subject: "New IT Team Request",
          body: `
            <h2>New IT Team Request</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName
            }</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Preferred Date:</strong> ${formData.date}</p>
            <p><strong>Needs Description:</strong></p>
            <p>${formData.needs.replace(/\n/g, "<br>")}</p>
            <p><strong>Contact Consent:</strong> ${formData.agree ? "Yes" : "No"
            }</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await sendEmail(formData);
      setSubmitMessage("Request sent successfully! We'll contact you soon.");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          needs: "",
          date: "",
          agree: false,
        });
        setSubmitMessage("");
        modal.close();
      }, 2000);
    } catch (error) {
      setSubmitMessage("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      needs: "",
      date: "",
      agree: false,
    });
    setErrors({});
    setSubmitMessage("");
    modal.close();
  };

  return (
    <Modal
      open={modal.isOpen}
      onClose={modal.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="backdrop-blur-[3px]"
    >
      <Box
        sx={style}
        className="bg-white md:max-w-[680px] max-w-[370px] w-full md:w-[680px] rounded-[8px]"
      >
        <div className="py-3 px-6 shadow-[0_-1px_0_0_#E5E7E8_inset]">
          <h2 className="justify-start text-zinc-900 text-base md:text-lg font-medium font-['Public_Sans'] leading-normal">
            Get your IT Team
          </h2>
        </div>

        <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          {submitMessage && (
            <div
              className={`p-3 rounded-[4px] text-xs md:text-sm ${submitMessage.includes("successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                }`}
            >
              {submitMessage}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col gap-1.5">
              <label
                htmlFor="firstName"
                className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight"
              >
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`rounded-[4px] border text-sm md:text-base px-4 py-2.5 ${errors.firstName ? "border-red-500" : "border-[#E5E7E8]"
                  }`}
                placeholder="Type here"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs">{errors.firstName}</span>
              )}
            </div>

            <div className="w-full flex flex-col gap-1.5">
              <label
                htmlFor="lastName"
                className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight"
              >
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`rounded-[4px] border text-sm md:text-base px-4 py-2.5 text-[14px] placeholder:text-[#959FA3] ${errors.lastName ? "border-red-500" : "border-[#E5E7E8]"
                  }`}
                placeholder="Type here"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight"
            >
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`rounded-[4px] border text-sm md:text-base px-4 py-2.5 ${errors.email ? "border-red-500" : "border-[#E5E7E8]"
                }`}
              placeholder="Type here"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label
              htmlFor="needs"
              className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight"
            >
              Describe Your Needs *
            </label>
            <textarea
              name="needs"
              id="needs"
              value={formData.needs}
              onChange={handleInputChange}
              className={`rounded-[4px] border text-sm md:text-base px-4 py-2.5 h-[98px] ${errors.needs ? "border-red-500" : "border-[#E5E7E8]"
                }`}
              placeholder="Tell us what you want to build and we would recommend an IT Team for you"
            />
            {errors.needs && (
              <span className="text-red-500 text-xs">{errors.needs}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label
              htmlFor="date"
              className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight"
            >
              Preferred Date of Resumption *
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
              className={`rounded-[4px] border text-sm md:text-base px-4 py-2.5 md:max-w-[292px] text-[#959FA3] ${errors.date ? "border-red-500" : "border-[#E5E7E8]"
                }`}
              placeholder="Type here"
            />
            {errors.date && (
              <span className="text-red-500 text-xs">{errors.date}</span>
            )}
          </div>

          <div className="flex gap-5">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            <div className="flex flex-col gap-1">
              <p className="justify-start text-zinc-800 text-xs md:text-sm font-normal font-['Public_Sans']">
                I agree to be contacted by email or phone number regarding my
                request or future related services *
              </p>
              {errors.agree && (
                <span className="text-red-500 text-xs">{errors.agree}</span>
              )}
            </div>
          </div>

          <div className="flex mt-12 justify-between">
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="px-6 py-3 bg-neutral-100 hover:opacity-65 rounded-full inline-flex justify-center items-center gap-2 disabled:opacity-50 pop-hover-btn"
            >
              <span className="justify-start text-zinc-900 text-xs md:text-sm font-semibold font-['Public_Sans'] capitalize leading-10">
                Cancel
              </span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-lime-300 border border-lime-300 hover:bg-white  rounded-full inline-flex justify-center items-center gap-2 disabled:opacity-50 pop-hover-btn"
            >
              <p className="justify-start text-neutral-800 text-xs md:text-sm font-semibold font-['Public_Sans'] capitalize leading-10">
                {isSubmitting ? "Sending..." : "Ask for a Quote"}
              </p>
              {!isSubmitting && (
                <span>
                  <FaArrowRightLong />
                </span>
              )}
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default MeetWithUsModal;
