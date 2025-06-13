import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { LANGUAGE_VERSIONS } from "../../constants";
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";
  
  const LanguageSelector = ({ language, onSelect }) => {
    return (
      <Box ml={2} mb={4}>
        <Text mb={2} fontSize="lg">
          Language:
        </Text>
        <Menu isLazy>
          <MenuButton as={Button}>{language}</MenuButton>
          {console.log('language check--->',language)}
          <MenuList bg="#110c1b">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "purple" : "black"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "",
                  text: "white"
                }}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <Text as="span" color="white" fontSize="sm">
                  ({version})
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    );
  };
  export default LanguageSelector;
  