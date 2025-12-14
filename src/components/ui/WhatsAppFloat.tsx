import { MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/data/productCategories";

const WhatsAppFloat = () => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'm interested in your services. Can you help me?")}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
};

export default WhatsAppFloat;

