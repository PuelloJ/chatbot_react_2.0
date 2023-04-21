import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Modal from "./components/modal";
import Chatbot from "./components/chatbot";
import React, { useState } from "react";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChat = () => {
    setIsChatOpen(true);
  };
  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business openChat={openChat} />
          {/* <Billing /> */}
          {/* <CardDeal /> */}
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
          <Modal
            isOpen={isChatOpen}
            onClose={closeChat}
            children={<Chatbot />}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
