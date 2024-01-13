import Link from "@mui/material/Link";

const CustomLink = () => {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      testando esse link
    </Link>
  );
};
export { CustomLink };
