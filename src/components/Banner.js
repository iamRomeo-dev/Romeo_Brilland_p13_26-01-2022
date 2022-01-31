/** @jsxImportSource @emotion/react */
import "twin.macro";
import "../App.css";
export const Banner = () => {
  return (
    <div tw="overflow-hidden relative h-80 md:h-96">
      <img
        tw="relative w-full sm:bottom-1/4 lg:bottom-1/2"
        src="./img/bank-tree.jpeg"
        alt=""
      />
      <section
        tw="absolute top-1/2 -translate-y-1/2 right-1/2 transform translate-x-1/2 w-60 bg-white p-8 text-left mx-auto md:right-1/4 md:translate-x-28
        "
      >
        <h2 tw="sr-only">Promoted Content</h2>
        <p tw="font-bold text-base md:text-xl m-0">No fees.</p>
        <p tw="font-bold text-base md:text-xl m-0">No minimum deposit.</p>
        <p tw="font-bold text-base md:text-xl m-0">High interest rates.</p>
        <p tw="mb-0 mt-2 text-sm md:text-lg">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};
