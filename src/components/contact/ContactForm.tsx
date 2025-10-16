"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendMessage } from "@/lib/api";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <section className="max-w-2xl mx-auto my-20 p-8 bg-(--brand-rose)/10 text-(--brand-green) rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-(--brand-green)">
        Skontaktuj się ze mną
      </h2>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Imię jest wymagane"),
          email: Yup.string()
            .email("Nieprawidłowy email")
            .required("Email jest wymagany"),
          message: Yup.string().required("Wiadomość jest wymagana"),
        })}
        onSubmit={async (values, { resetForm }) => {
          try {
            setFormStatus("sending");
            setErrorMsg("");
            await sendMessage(values);
            setFormStatus("success");
            resetForm();
          } catch (e: unknown) {
            setFormStatus("error");
            setErrorMsg(
              (e as { response?: { data?: { error?: { message?: string } } } })
                ?.response?.data?.error?.message ||
                "Nie udało się wysłać wiadomości. Spróbuj ponownie."
            );
          }
        }}
      >
        {({ resetForm }) => (
          <Form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 font-medium text-[var(--brand-green)]"
              >
                Imię
              </label>
              <Field
                name="name"
                type="text"
                className="px-4 py-2 rounded-md border border-[var(--brand-rose)]/40 focus:ring-2 
                           focus:ring-[var(--brand-rose)] focus:outline-none bg-white shadow-sm
                           placeholder-[var(--brand-sage)]/60 text-[var(--brand-green)]"
                placeholder="Wpisz swoje imię"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 font-medium text-[var(--brand-green)]"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="px-4 py-2 rounded-md border border-[var(--brand-rose)]/40 focus:ring-2 
                           focus:ring-[var(--brand-rose)] focus:outline-none bg-white shadow-sm
                           placeholder-[var(--brand-sage)]/60 text-[var(--brand-green)]"
                placeholder="Twój adres email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 font-medium text-[var(--brand-green)]"
              >
                Wiadomość
              </label>
              <Field
                as="textarea"
                name="message"
                rows={5}
                className="px-4 py-2 rounded-md border border-[var(--brand-rose)]/40 focus:ring-2 
                           focus:ring-[var(--brand-rose)] focus:outline-none bg-white shadow-sm resize-none
                           placeholder-[var(--brand-sage)]/60 text-[var(--brand-green)]"
                placeholder="Napisz swoją wiadomość..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            {formStatus === "success" && (
              <div
                role="status"
                className="rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800"
              >
                Dziękuję! Wiadomość została wysłana ✅
              </div>
            )}
            {formStatus === "error" && (
              <div
                role="alert"
                className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-700"
              >
                {errorMsg}
              </div>
            )}

            <div className="flex gap-4 justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                type="submit"
                className="flex-1 px-6 py-3 bg-[var(--brand-rose)] text-[var(--brand-beige)] font-semibold 
                           rounded-md shadow-md hover:bg-[var(--brand-beige)] hover:text-[var(--brand-rose)] 
                           hover:shadow-xl border border-transparent hover:border-[var(--brand-rose)]
                           focus:outline-none focus:ring-2 focus:ring-[var(--brand-rose)] focus:ring-offset-2
                           transition-all duration-300 ease-out"
              >
                {formStatus === "sending" ? "Wysyłanie…" : "Wyślij"}
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onClick={() => {
                  resetForm();
                  setFormStatus("idle");
                  setErrorMsg("");
                }}
                className="flex-1 px-6 py-3 bg-[var(--brand-beige)] text-[var(--brand-rose)] font-semibold 
                           rounded-md shadow-md border border-[var(--brand-rose)] 
                           hover:bg-[var(--brand-rose)] hover:text-[var(--brand-beige)] hover:shadow-xl
                           focus:outline-none focus:ring-2 focus:ring-[var(--brand-rose)] focus:ring-offset-2
                           transition-all duration-300 ease-out"
              >
                Wyczyść
              </motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
