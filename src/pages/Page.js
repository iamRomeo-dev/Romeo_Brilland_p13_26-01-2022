/** @jsxImportSource @emotion/react */
import "twin.macro";

export const PageSkeleton = (props) => {
  return (
    <main
      tw="h-screen flex-1 bg-gray-100 relative overflow-y-auto focus:(outline-none)"
      tabIndex={0}
      {...props}
    />
  );
};

export const Page404 = (props) => {
  return (
    <div tw="flex flex-col">
      <span tw="text-gray-600 font-thin" style={{ fontSize: "20vw" }}>
        404
      </span>
      <span tw="text-gray-600 font-medium" style={{ fontSize: "5vw" }}>
        Page Not Found
      </span>
    </div>
  );
};
