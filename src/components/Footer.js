import { Container,Box } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Box>
          <span className="text-center py-3">
            <p>Afrochella &copy; {currentYear}</p>
          </span>
        </Box>
      </Container>
    </footer>
  );
};
export default Footer;