import React from 'react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Thank You!</h1>
        <p className="text-muted-foreground text-lg">
          Your message has been sent. I’ll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
