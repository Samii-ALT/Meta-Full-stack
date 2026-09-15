import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack alignItems="flex-start">
      <Image src={imageSrc} borderRadius="8px" />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack spacing={2}>
        <Text as="span">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;