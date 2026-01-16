import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoClose } from "react-icons/io5";
import { style } from "@/utils/config";
import { FaArrowRightLong } from "react-icons/fa6";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  needs: string;
  teamSize: string;
  roles: string[];
  timeline: string;
  date: string;
  agree: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  needs?: string;
  teamSize?: string;
  roles?: string;
  timeline?: string;
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
    teamSize: "",
    roles: [],
    timeline: "",
    date: "",
    agree: false,
  });

  const availableRoles = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "UI/UX Designer",
    "Mobile Developer",
    "QA Engineer",
    "DevOps",
    "Data Scientist",
    "AI/ML Engineer",
    "Product Manager"
  ];

  const timelineOptions = [
    "1-3 months",
    "3-6 months",
    "1 year",
    "Long term"
  ];

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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

    if (!formData.teamSize.trim()) {
      newErrors.teamSize = "Number of team members is required";
    }

    if (!formData.roles.length) {
      newErrors.roles = "Please select at least one role";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a project timeline";
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

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const toggleRole = (role: string) => {
    setFormData((prev) => {
      const isSelected = prev.roles.includes(role);
      const newRoles = isSelected
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role];

      return { ...prev, roles: newRoles };
    });

    if (errors.roles) {
      setErrors((prev) => ({ ...prev, roles: undefined }));
    }
  };

  const selectTimeline = (option: string) => {
    setFormData((prev) => ({ ...prev, timeline: option }));
    if (errors.timeline) {
      setErrors((prev) => ({ ...prev, timeline: undefined }));
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
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Team Size Needed:</strong> ${formData.teamSize}</p>
            <p><strong>Roles Needed:</strong> ${formData.roles.join(", ")}</p>
            <p><strong>Project Timeline:</strong> ${formData.timeline}</p>
            <p><strong>Preferred Date:</strong> ${formData.date}</p>
            <p><strong>Needs Description:</strong></p>
            <p>${formData.needs.replace(/\n| /g, "<br>")}</p>
            <p><strong>Contact Consent:</strong> ${formData.agree ? "Yes" : "No"}</p>
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

      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          needs: "",
          teamSize: "",
          roles: [],
          timeline: "",
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
      teamSize: "",
      roles: [],
      timeline: "",
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

        <form className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[80vh]" onSubmit={handleSubmit}>
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
              htmlFor="teamSize"
              className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight"
            >
              Number of Team Members Needed *
            </label>
            <input
              type="text"
              name="teamSize"
              id="teamSize"
              value={formData.teamSize}
              onChange={handleInputChange}
              className={`rounded-[4px] border text-sm md:text-base px-4 py-2.5 ${errors.teamSize ? "border-red-500" : "border-[#E5E7E8]"
                }`}
              placeholder="e.g. 3 or 5-10"
            />
            {errors.teamSize && (
              <span className="text-red-500 text-xs">{errors.teamSize}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label
              className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight"
            >
              Project Timeline *
            </label>
            <div className="flex flex-wrap gap-3">
              {timelineOptions.map((option) => {
                const isSelected = formData.timeline === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectTimeline(option)}
                    className={`px-4 py-2 rounded-full border text-sm transition-all ${isSelected
                      ? "bg-[#161616] border-[#161616] text-white"
                      : "border-[#E5E7E8] text-zinc-600 hover:border-[#161616]"
                      }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {errors.timeline && (
              <span className="text-red-500 text-xs">{errors.timeline}</span>
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
            />
            {errors.date && (
              <span className="text-red-500 text-xs">{errors.date}</span>
            )}
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label className="justify-start text-zinc-900 text-xs md:text-sm font-normal font-['Public_Sans'] leading-tight">
              Roles Needed *
            </label>

            <div
              className={`flex flex-wrap gap-2 min-h-[44px] p-2 rounded-[4px] border ${errors.roles ? "border-red-500" : "border-[#E5E7E8]"
                }`}
            >
              {formData.roles.length === 0 && (
                <span className="text-[#959FA3] text-sm md:text-base px-2 py-1">
                  Select roles below...
                </span>
              )}
              {formData.roles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-1.5 px-3 py-1 bg-[#161616] text-white rounded-full text-xs md:text-sm font-['Public_Sans']"
                >
                  <span>{role}</span>
                  <button
                    type="button"
                    onClick={() => toggleRole(role)}
                    className="hover:text-red-400 transition-colors"
                  >
                    <IoClose size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {availableRoles.map((role) => {
                const isSelected = formData.roles.includes(role);
                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => toggleRole(role)}
                    className={`px-3 py-1.5 rounded-full border text-xs transition-all ${isSelected
                        ? "bg-lime-300 border-lime-300 text-black"
                        : "border-[#E5E7E8] text-zinc-600 hover:border-lime-300"
                      }`}
                  >
                    {role}
                  </button>
                );
              })}
            </div>

            {errors.roles && (
              <span className="text-red-500 text-xs">{errors.roles}</span>
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

          <div className="flex mt-8 justify-between">
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="px-6 py-3 bg-neutral-100 hover:opacity-65 rounded-full inline-flex justify-center items-center gap-2 disabled:opacity-50"
            >
              <span className="text-zinc-900 text-xs md:text-sm font-semibold font-['Public_Sans']">
                Cancel
              </span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-lime-300 border border-lime-300 hover:bg-white rounded-full inline-flex justify-center items-center gap-2 disabled:opacity-50"
            >
              <p className="text-neutral-800 text-xs md:text-sm font-semibold font-['Public_Sans']">
                {isSubmitting ? "Sending..." : "Ask for a Quote"}
              </p>
              {!isSubmitting && <FaArrowRightLong />}
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default MeetWithUsModal;
