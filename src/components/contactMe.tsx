import { MyLinks } from "./linksBar";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div>
        <h1 className="section-header"> Let&apos;s get in touch</h1>
      </div>
      <h1> Here are some of my links</h1>
      <MyLinks />
      <h1>
        {" "}
        Feel free to send me an email at:{" "}
        <p>
          <a href="mailto:jarrodsmail72@gmail.com">jarrodsmail72@gmail.com</a>
        </p>
      </h1>
    </div>
  );
};
export default ContactMe;
