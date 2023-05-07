import React, { useState } from "react";
import {
  render,
  BlockStack,
  useApplyMetafieldsChange,
  useMetafield,
  Checkbox,
} from "@shopify/checkout-ui-extensions-react";

// Set the entry point for the extension
render("Checkout::Dynamic::Render", () => <App />);

function App() {
  // Set up the checkbox state
  const [checked, setChecked] = useState(false);

  // Define the metafield namespace and key
  const metafieldNamespace = "door";
  const metafieldKey = "leave_at_door";

  // Set a function to handle updating a metafield
  const applyMetafieldsChange = useApplyMetafieldsChange();

  // Set a function to handle the Checkbox component's onChange event
  const handleChange = () => {
    setChecked(!checked);
    applyMetafieldsChange({
      type: "updateMetafield",
      namespace: metafieldNamespace,
      key: metafieldKey,
      valueType: "string",
      value: !checked ? "true" : "false",
    });
  };

  // Render the extension components
  return (
    <BlockStack>
      <Checkbox checked={checked} onChange={handleChange}>
        Leave at Door
      </Checkbox>
    </BlockStack>
  );
}