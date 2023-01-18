const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));

const isPositiveNumber = (...inputs) => inputs.every(inp => inp > 0)



export { validInputs, isPositiveNumber };
