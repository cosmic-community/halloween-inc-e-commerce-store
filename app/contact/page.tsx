import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - Halloween Inc',
  description: 'Get in touch with Halloween Inc for any questions about our spooky products and services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have a question about our spooky products? We'd love to hear from you!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <ContactForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">contact@halloweeninc.com</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">1-800-SPOOKY</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-3">🏪</div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">123 Haunted Lane<br />Spookyville, SP 12345</p>
          </div>
        </div>
      </div>
    </div>
  )
}