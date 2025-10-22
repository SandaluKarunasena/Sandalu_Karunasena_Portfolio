import {Mail, Phone, MapPin, Send} from "lucide-react";
import {useState} from "react";
import {useToast} from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const {toast} = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // EmailJS configuration
            const serviceId = 'service_dwh4ms3';
            const templateId = 'template_ncgv41t';
            const publicKey = 'gzNL2uns3Kkd_AdJ4';

            const templateParams = {
                name: formData.name,
                email: formData.email,
                title: formData.subject,
                message: formData.message
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            toast({
                title: "Message sent successfully!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });

            // Reset form
            setFormData({name: '', email: '', subject: '', message: ''});
        } catch (error) {
            console.error('EmailJS error:', error);
            toast({
                title: "Failed to send message",
                description: "Something went wrong. Please try again or email me directly.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="pt-12 pb-12 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
                    Get In Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                                Let's work together
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                I'm always interested in new opportunities and interesting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary rounded-lg">
                                    <Mail className="w-5 h-5 text-white"/>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">Email</p>
                                    <a href="mailto:sandalukarunasena98@gmail.com"
                                       className="text-slate-800 hover:text-blue-600 transition-colors">
                                        sandalukarunasena98@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary rounded-lg">
                                    <Phone className="w-5 h-5 text-white"/>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">Phone</p>
                                    <p className="text-slate-800">+94 (0) 77 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary rounded-lg">
                                    <MapPin className="w-5 h-5 text-white"/>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm">Location</p>
                                    <p className="text-slate-800">Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors duration-200"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-slate-700 text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors duration-200"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            <Send className="w-5 h-5"/>
                            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
