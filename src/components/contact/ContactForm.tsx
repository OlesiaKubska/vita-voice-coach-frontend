"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useState, useCallback, useRef } from "react";
import { sendMessage } from "@/lib/api";
import type { MessageData } from "@/lib/types";
import { isAxiosError } from "axios";

const Schema = Yup.object({
  name: Yup.string()
    .trim()
    .max(120, "Za długie imię")
    .required("Imię jest wymagane"),
  email: Yup.string()
    .trim()
    .email("Nieprawidłowy email")
    .max(190)
    .required("Email jest wymagany"),
  message: Yup.string()
    .trim()
    .max(2000, "Wiadomość jest za długa")
    .required("Wiadomość jest wymagana"),
});

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const alertRef = useRef<HTMLDivElement>(null);

  const initial: MessageData = { name: "", email: "", message: "" };

  const handleSubmit = useCallback(
    async (values: MessageData, { resetForm }: { resetForm: () => void }) => {
      setFormStatus("sending");
      setErrorMsg("");

      const payload: MessageData = {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      };

      try {
        const created = await sendMessage(payload);
        if (created) {
          setFormStatus("success");
          resetForm();
          setTimeout(() => alertRef.current?.focus(), 0);
        } else {
          throw new Error(
            "Serwer odpowiedział, ale wiadomość nie została przetworzona."
          );
        }
      } catch (err: unknown) {
        let errorMessage = "Nie udało się wysłać wiadomości. Spróbuj ponownie.";

        if (isAxiosError(err)) {
          const status = err.response?.status;
          if (status === 429)
            errorMessage = "Zbyt wiele prób. Spróbuj ponownie za chwilę.";
          else if (status === 413) errorMessage = "Wiadomość jest zbyt duża.";
          else if (status && status >= 500)
            errorMessage = "Błąd serwera. Spróbuj ponownie później.";
          else errorMessage = err.message || errorMessage;
        } else if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === "string") {
          errorMessage = err;
        }

        setFormStatus("error");
        setErrorMsg(errorMessage);
        setTimeout(() => alertRef.current?.focus(), 0);
      }
    },
    []
  );

  return (
    <section className="max-w-2xl mx-auto my-20 p-8 bg-[var(--brand-rose)]/10 text-[var(--brand-green)] rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-[var(--brand-green)]">
        Skontaktuj się ze mną
      </h2>

      <Formik
        initialValues={initial}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ resetForm, isSubmitting, errors, touched }) => (
          <Form className="space-y-6" noValidate>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Strona</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 font-medium text-[var(--brand-green)]"
              >
                Imię
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                aria-invalid={touched.name && !!errors.name}
                aria-describedby={
                  touched.name && errors.name ? "name-error" : undefined
                }
                className="px-4 py-2 rounded-md border border-[var(--brand-rose)]/40 focus:ring-2 
                           focus:ring-[var(--brand-rose)] focus:outline-none bg-[var(--brand-beige)] shadow-sm
                           placeholder-[var(--brand-sage)]/60 text-[var(--brand-green)]"
                placeholder="Wpisz swoje imię"
              />
              <ErrorMessage
                id="name-error"
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
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={
                  touched.email && errors.email ? "email-error" : undefined
                }
                className="px-4 py-2 rounded-md border border-[var(--brand-rose)]/40 focus:ring-2 
                           focus:ring-[var(--brand-rose)] focus:outline-none bg-[var(--brand-beige)] shadow-sm
                           placeholder-[var(--brand-sage)]/60 text-[var(--brand-green)]"
                placeholder="Twój adres email"
              />
              <ErrorMessage
                id="email-error"
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
                id="message"
                as="textarea"
                name="message"
                rows={5}
                aria-invalid={touched.message && !!errors.message}
                aria-describedby={
                  touched.message && errors.message
                    ? "message-error"
                    : undefined
                }
                className="px-4 py-2 rounded-md border border-[var(--brand-rose)]/40 focus:ring-2 
                           focus:ring-[var(--brand-rose)] focus:outline-none bg-[var(--brand-beige)] shadow-sm resize-none
                           placeholder-[var(--brand-sage)]/60 text-[var(--brand-green)]"
                placeholder="Napisz swoją wiadomość..."
              />
              <ErrorMessage
                id="message-error"
                name="message"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            {formStatus === "success" && (
              <div
                ref={alertRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800"
              >
                Dziękuję! Wiadomość została wysłana pomyślnie.
              </div>
            )}
            {formStatus === "error" && (
              <div
                ref={alertRef}
                tabIndex={-1}
                role="alert"
                aria-live="assertive"
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
                disabled={formStatus === "sending" || isSubmitting}
                type="submit"
                aria-busy={formStatus === "sending" || isSubmitting}
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
                disabled={formStatus === "sending" || isSubmitting}
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
