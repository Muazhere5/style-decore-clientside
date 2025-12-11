const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <form className="space-y-4">
        <input placeholder="Your Name" className="input input-bordered w-full" />
        <input placeholder="Your Email" className="input input-bordered w-full" />
        <textarea placeholder="Message" className="textarea textarea-bordered w-full"></textarea>
        <button className="btn btn-primary w-full">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;
