/** @jsxImportSource @emotion/react */
import "twin.macro";
import "../App.css";

const Feature = ({ logo, tittle, description }) => {
  return (
    <div tw="flex-1 p-10">
      {logo}
      <h3 class="feature-item-title">{tittle}</h3>
      <p tw="content-center">{description}</p>
    </div>
  );
};

export const UnderBanner = () => {
  return (
    <>
      <section tw="flex flex-col md:flex-row text-center">
        <Feature
          logo={
            <img
              src="./img/icon-chat.png"
              alt="1 Icon"
              tw="p-4 w-32 mx-auto border-8 border-solid border-green-500 rounded-full"
            />
          }
          tittle="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          logo={
            <img
              src="./img/icon-money.png"
              alt="2 Icon"
              tw="p-4 w-32 mx-auto border-8 border-solid border-green-500 rounded-full"
            />
          }
          tittle="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!
          "
        />
        <Feature
          logo={
            <img
              src="./img/icon-security.png"
              alt="3 Icon"
              tw="p-4 w-32 mx-auto border-8 border-solid border-green-500 rounded-full"
            />
          }
          tittle="Security you can trust"
          description="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </>
  );
};
