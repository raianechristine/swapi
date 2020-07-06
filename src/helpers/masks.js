const masks = {
  number(value) {
    return value.replace(/[^0-9]/g, "");
  },
};

const getMask = (key) => masks[key] || ((value) => value);

const handleInputMask = (event, mask) => {
  const { target } = event;

  if (mask) {
    target.value = getMask(mask)(target.value);
  }
};

export const MASK_TYPES = {
  number: "number",
};

export { handleInputMask };
