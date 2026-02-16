export default function Contact() {
  return (
    <div className="section">
      <h2 className="section-title">Contact</h2>
      <form className="box max-w-xl space-y-4">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
    </div>
  )
}
