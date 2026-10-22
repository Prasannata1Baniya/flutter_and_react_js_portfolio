import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Mail, MapPin, Copy, Check, Send, Sparkles, MessageSquare, Heart, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const emailAddress = 'bprasannata55@gmail.com';


  const formKey = 'cfc88934a9180e091a5cc76026a86621';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {

      const targetEndpoint =
        formKey && formKey !== 'cfc88934a9180e091a5cc76026a86621' ? formKey : emailAddress;

      const response = await fetch(`https://formsubmit.co/ajax/${targetEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setFormSubmitted(true);
      } else {
        triggerMailtoFallback();
      }
    } catch (err) {
      console.error('Failed to send email via API:', err);
      triggerMailtoFallback();
    } finally {
      setLoading(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <footer className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionPill}>
            <Sparkles size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className={styles.title}>
            Get In <span className={styles.titleAccent}>Touch</span>
          </h2>
          <p className={styles.subtitle}>
            I am actively open for internship opportunities, full-time mobile/web roles, and freelance project collaborations. Let's build something extraordinary together.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Cards Column */}
          <div className={styles.cardsColumn}>
            {/* Email Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <Mail size={22} />
              </div>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>Direct Email</span>
                <a href={`mailto:${emailAddress}`} className={styles.cardValue}>
                  {emailAddress}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className={styles.copyBtn}
                title="Copy Email Address"
              >
                {copied ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/prasannata-baniya-060b792bb"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCardLink}
            >
              <div className={`${styles.cardIcon} ${styles.iconLinkedin}`}>
                <LinkedinIcon size={22} />
              </div>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>LinkedIn Profile</span>
                <span className={styles.cardValue}>linkedin.com/in/prasannata-baniya</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Prasannata1Baniya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCardLink}
            >
              <div className={`${styles.cardIcon} ${styles.iconGithub}`}>
                <GithubIcon size={22} />
              </div>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>GitHub Profile</span>
                <span className={styles.cardValue}>github.com/Prasannata1Baniya</span>
              </div>
            </a>

            {/* Location */}
            <div className={styles.contactCard}>
              <div className={`${styles.cardIcon} ${styles.iconLocation}`}>
                <MapPin size={22} />
              </div>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>Location & Availability</span>
                <span className={styles.cardValue}>Kathmandu, Nepal • Remote Worldwide</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <MessageSquare size={20} className={styles.formIcon} />
              <h3>Send Me a Direct Message</h3>
            </div>

            {formSubmitted ? (
              <div className={styles.successBanner}>
                <Check size={36} className={styles.successIcon} />
                <h4>Message Sent Successfully!</h4>
                <p>
                  Thank you for reaching out, {formData.name}! Your message has been delivered directly to my email inbox. I will reply to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className={styles.resetFormBtn}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={loading}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    disabled={loading}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, role, or question..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    disabled={loading}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={18} className={styles.spinner} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright Footer */}
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Prasannata Baniya. All rights reserved.</p>
          <p className={styles.builtWith}>
            Engineered with <Heart size={14} className={styles.heartIcon} /> using React & Modern CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
