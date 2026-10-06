"use client";

import { useActionState } from "react";
import { sendMessage, type FormState } from "./actions";
import styles from "./contact.module.css";

const initialState: FormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState
  );

  

  return (
    <form className={styles.form} action={formAction}>

    {/* Honeypot */}
    <div className={styles.hp} aria-hidden="true">                                               
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>


      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required defaultValue={state.fields?.name} />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required defaultValue={state.fields?.email}/>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={8} required defaultValue={state.fields?.message}/>

      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send"}

      </button>

      {state.status !== "idle" && <p role="status">{state.message}</p>}

      
    </form>
  );
}