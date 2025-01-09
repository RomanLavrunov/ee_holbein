'use client'
import Layout from '../../components/Layout';
import './page.css'

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <form className='contact-form'>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}
