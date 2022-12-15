import { Box, Heading } from "@chakra-ui/react";

export default function CardHeader({ title, bgHead, bgBody, color, children, width }) {
  return (
    <Box w="full" h="full" borderRadius="lg" boxShadow="md">
      <Box w={width!==undefined ? width : "100%"} overflow="hidden" mx="auto" borderRadius="lg" bg={bgBody}>
        <Heading as="h4" size="sm" w="full" bg={bgHead} color={color} p={2}>
          {title}
        </Heading>
        <Box p={4}>{children}</Box>
      </Box>
    </Box>
  );
}
