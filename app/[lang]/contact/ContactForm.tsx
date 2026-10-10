"use client";

import { useActionState } from "react";
import { sendMessage, type FormState } from "./actions";
import styles from "./contact.module.css";

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
  };
}

const initialState: FormState = { status: "idle", message: "" };

export default function ContactForm({ labels }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState
  );

  return (
    <form className={styles.form} action={formAction}>
      {/* Honeypot */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor="hp_field">Website</label>
        <input id="hp_field" name="hp_field" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor="name">{labels.name}</label>
      <input id="name" name="name" type="text" required defaultValue={state.fields?.name} />

      <label htmlFor="email">{labels.email}</label>
      <input id="email" name="email" type="email" required defaultValue={state.fields?.email} />

      <label htmlFor="message">{labels.message}</label>
      <textarea id="message" name="message" rows={5} required defaultValue={state.fields?.message} />

      <button type="submit" disabled={isPending}>
        {isPending ? labels.sending : labels.send}
      </button>

      {state.status !== "idle" && <p role="status">{state.message}</p>}
    </form>
  );
}