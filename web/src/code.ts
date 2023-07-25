const code = [
  {
    text: "const",
    className: "text-[#d94c76]",
  },
  {
    text: " Select ",
    className: "text-[#fffd8e]",
  },
  {
    text: "= ",
    className: "text-[#d94c76]",
  },
  {
    text: "() ",
    className: "text-white-500",
  },
  {
    text: "=> ",
    className: "text-[#d94c76]",
  },
  {
    text: "{\n",
    className: "text-white-500",
  },
  {
    text: "const",
    className: "text-[#d94c76]",
  },
  {
    text: " [",
    className: "text-white-500",
  },
  {
    text: "selectedOption",
    className: "text-[#89DDFF]",
  },
  {
    text: ", ",
    className: "text-white-500",
  },
  {
    text: "setSelectedOption",
    className: "text-[#89DDFF]",
  },
  {
    text: "] ",
    className: "text-white-500",
  },
  {
    text: "= ",
    className: "text-[#d94c76]",
  },
  {
    text: "useState",
    className: "text-[#fffd8e]",
  },
  {
    text: "<",
    className: "text-white-500",
  },
  {
    text: "string",
    className: "text-[#4CD95F]",
  },
  {
    text: ">(",
    className: "text-white-500",
  },
  {
    text: '"Party 🎉"',
    className: "text-green-500",
  },
  {
    text: ");\n",
    className: "text-white-500",
  },
  {
    text: "const",
    className: "text-[#d94c76]",
  },
  {
    text: " handleSelectChange ",
    className: "text-[#fffd8e]",
  },
  {
    text: "= ",
    className: "text-[#d94c76]",
  },
  {
    text: "(",
    className: "text-white-500",
  },
  {
    text: "event",
    className: "text-[#89DDFF]",
  },
  {
    text: ": ",
    className: "text-white-500",
  },
  {
    text: "React.ChangeEvent",
    className: "text-[#89DDFF]",
  },
  {
    text: "<",
    className: "text-white-500",
  },
  {
    text: "HTMLSelectElement",
    className: "text-[#89DDFF]",
  },
  {
    text: ">) ",
    className: "text-white-500",
  },
  {
    text: "=> ",
    className: "text-[#d94c76]",
  },
  {
    text: "{\n",
    className: "text-white-500",
  },
  {
    text: " setSelectedOption",
    className: "text-[#fffd8e]",
  },
  {
    text: "(",
    className: "text-white-500",
  },
  {
    text: "event.target.value",
    className: "text-[#89DDFF]",
  },
  {
    text: ");\n",
    className: "text-white-500",
  },
  {
    text: "};\n",
    className: "text-white-500",
  },
  {
    text: "return ",
    className: "text-[#d94c76]",
  },
  {
    text: "(\n",
    className: "text-white-500",
  },
  {
    text: "<",
    className: "text-white-500",
  },
  {
    text: "div",
    className: "text-[#d94c76]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: " <",
    className: "text-white-500",
  },
  {
    text: "label",
    className: "text-[#d94c76]",
  },
  {
    text: " htmlFor",
    className: "text-[#c94cd9]",
  },
  {
    text: '="select">',
    className: "text-white-500",
  },
  {
    text: "Select a theme:",
    className: "text-[#89DDFF]",
  },
  {
    text: "< /",
    className: "text-white-500",
  },
  {
    text: "label",
    className: "text-[#d94c76]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: "   <",
    className: "text-white-500",
  },
  {
    text: "select",
    className: "text-[#d94c76]",
  },
  {
    text: " id",
    className: "text-[#c94cd9]",
  },
  {
    text: '="select" ',
    className: "text-white-500",
  },
  {
    text: "value",
    className: "text-[#c94cd9]",
  },
  {
    text: "=",
    className: "text-white-500",
  },
  {
    text: "{selectedOption} ",
    className: "text-[#89DDFF]",
  },
  {
    text: "onChange",
    className: "text-[#c94cd9]",
  },
  {
    text: "=",
    className: "text-white-500",
  },
  {
    text: "{handleSelectChange}",
    className: "text-[#89DDFF]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: "   <",
    className: "text-white-500",
  },
  {
    text: "option",
    className: "text-[#d94c76]",
  },
  {
    text: " value",
    className: "text-[#c94cd9]",
  },
  {
    text: "=",
    className: "text-white",
  },
  {
    text: '"Party 🎉"',
    className: "text-[#4CD95F]",
  },
  {
    text: ">",
    className: "text-white-500",
  },

  {
    text: "Party 🎉",
    className: "text-[#89DDFF]",
  },
  {
    text: "< /",
    className: "text-white-500",
  },
  {
    text: "option",
    className: "text-[#d94c76]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: "   <",
    className: "text-white-500",
  },
  {
    text: "option",
    className: "text-[#d94c76]",
  },
  {
    text: " value",
    className: "text-[#c94cd9]",
  },
  {
    text: '="Relax ☕">',
    className: "text-[#4CD95F]",
  },
  {
    text: "Relax ☕",
    className: "text-[#89DDFF]",
  },
  {
    text: "< /",
    className: "text-white-500",
  },
  {
    text: "option",
    className: "text-[#d94c76]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: "   <",
    className: "text-white-500",
  },
  {
    text: "option",
    className: "text-[#d94c76]",
  },
  {
    text: " value",
    className: "text-[#c94cd9]",
  },
  {
    text: '="NotRed! 🟣">',
    className: "text-[#4CD95F]",
  },
  {
    text: "NotRed! 🟣",
    className: "text-[#89DDFF]",
  },
  {
    text: "< /",
    className: "text-white-500",
  },
  {
    text: "option",
    className: "text-[#d94c76]",
  },

  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: "  < /",
    className: "text-white-500",
  },
  {
    text: "select",
    className: "text-[#d94c76]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: "  <",
    className: "text-white-500",
  },
  {
    text: "p",
    className: "text-[#d94c76]",
  },
  {
    text: ">",
    className: "text-white-500",
  },
  {
    text: "{selectedOption}",
    className: "text-[#89DDFF]",
  },
  {
    text: "< /",
    className: "text-white-500",
  },
  {
    text: "p",
    className: "text-[#d94c76]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: "< /",
    className: "text-white-500",
  },
  {
    text: "div",
    className: "text-[#d94c76]",
  },
  {
    text: ">\n",
    className: "text-white-500",
  },
  {
    text: " );\n",
    className: "text-white-500",
  },
  {
    text: "};\n",
    className: "text-white-500",
  },
  {
    text: "\n",
    className: "text-white-500",
  },
  {
    text: "export default ",
    className: "text-[#d94c76]",
  },
  {
    text: "Select",
    className: "text-[#4CD95F]",
  },
  {
    text: ";",
    className: "text-white-500",
  },
];

export default code;
