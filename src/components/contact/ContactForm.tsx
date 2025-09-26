"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="max-w-2xl mx-auto p-8 bg-(--brand-beige) text-(--brand-green) rounded-xl shadow-lg">
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
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ resetForm }) => (
          <Form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 font-medium text-(--brand-green)"
              >
                Imię
              </label>
              <Field
                name="name"
                type="text"
                className="px-4 py-2 rounded-md border border-(--brand-rose)/40 focus:ring-2 
                           focus:ring-(--brand-rose) focus:outline-none bg-white shadow-sm
                           placeholder-(--brand-sage)/60 text-(--brand-green)"
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
                className="mb-2 font-medium text-(--brand-green)"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="px-4 py-2 rounded-md border border-(--brand-rose)/40 focus:ring-2 
                           focus:ring-(--brand-rose) focus:outline-none bg-white shadow-sm
                           placeholder-(--brand-sage)/60 text-(--brand-green)"
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
                className="mb-2 font-medium text-(--brand-green)"
              >
                Wiadomość
              </label>
              <Field
                as="textarea"
                name="message"
                rows={5}
                className="px-4 py-2 rounded-md border border-(--brand-rose)/40 focus:ring-2 
                           focus:ring-(--brand-rose) focus:outline-none bg-white shadow-sm resize-none
                           placeholder-(--brand-sage)/60 text-(--brand-green)"
                placeholder="Napisz swoją wiadomość..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div className="flex gap-4 justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                type="submit"
                className="flex-1 px-6 py-3 bg-(--brand-rose) text-(--brand-beige) font-semibold 
                           rounded-md shadow-md hover:bg-(--brand-beige) hover:text-(--brand-rose) 
                           hover:shadow-xl border border-transparent hover:border-(--brand-rose)
                           focus:outline-none focus:ring-2 focus:ring-(--brand-rose) focus:ring-offset-2
                           transition-all duration-300 ease-out"
              >
                Wyślij
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onClick={() => resetForm()}
                className="flex-1 px-6 py-3 bg-(--brand-beige) text-(--brand-rose) font-semibold 
                           rounded-md shadow-md border border-(--brand-rose) 
                           hover:bg-(--brand-rose) hover:text-(--brand-beige) hover:shadow-xl
                           focus:outline-none focus:ring-2 focus:ring-(--brand-rose) focus:ring-offset-2
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
