import React from "react";
import { t1, t2, t3, t4 } from "../assets";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center py-4 bg-gray-100">
      <div className="font-bold sm:text-6xl text-3xl text-blue-900 text-center sm:py-8 pt-10 pb-5">
        What People Say About Us
      </div>
      <div className="sm:pb-6 pb-4 sm:pt-5 pt-1 text-center text-gray-500 font-normal lg:text-3xl sm:text-2xl text-xl sm:w-[60%] w-[90%] mx-auto">
        Grateful for the trust and love people have shown to us. Customer testimonials are a powerful tool that every brand should be using to showcase how their products or services have improved their clients’ lives.  
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[85%] mx-auto">
        <TestimonialCard
          text={
            "We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow"
          }
          imgSrc={t1}
          name={"Hetal Mundra"}
        />
        <TestimonialCard
          text={
            "Pensil is super. We were looking to integrate with Circle based out of US but this made us change the game plan."
          }
          imgSrc={t2}
          name={"Abhijeet Yadav"}
        />
        <TestimonialCard
          text={
            "I love Pensil, This is great. Good to see world class product coming from India. Keep growing"
          }
          imgSrc={t3}
          name={"Lalit Tyagi"}
        />
        <TestimonialCard
          text={
            "I love the platform❤️. All our students use Pensil for internal communication and academics. It has been awesome working with the Pensil team"
          }
          imgSrc={t4}
          name={"Anurag Trivedi"}
        />
        <TestimonialCard
          text={
            "We use the Pensil platform to interlink all our rural libraries and also to connect city volunteers with students in villages in Rural Lucknow"
          }
          imgSrc={t1}
          name={"Hetal Mundra"}
        />
        <TestimonialCard
          text={
            "Pensil is super. We were looking to integrate with Circle based out of US but this made us change the game plan."
          }
          imgSrc={t2}
          name={"Abhijeet Yadav"}
        />
        <TestimonialCard
          text={
            "I love Pensil, This is great. Good to see world class product coming from India. Keep growing"
          }
          imgSrc={t3}
          name={"Lalit Tyagi"}
        />
        <TestimonialCard
          text={
            "I love the platform❤️. All our students use Pensil for internal communication and academics. It has been awesome working with the Pensil team"
          }
          imgSrc={t4}
          name={"Anurag Trivedi"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
