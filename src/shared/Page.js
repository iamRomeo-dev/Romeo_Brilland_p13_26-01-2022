export const PageSkeleton = (props) => {
  return (
    <main
      tw="h-screen flex-1 bg-gray-100 relative overflow-y-auto focus:(outline-none)"
      tabIndex={0}
      {...props}
    />
  );
};
