import { Box } from "@chakra-ui/react";

export default function Square({ bgBody, children }) {
  return (
    <Box w="full" h="full" borderRadius="lg" boxShadow="md">
      <Box w="100%" overflow="hidden" mx="auto" borderRadius="lg" bg={bgBody}>
        <Box p={4}>{children}</Box>
      </Box>
    </Box>
  );
}