// Colors

// My portfolio web site media

export const adaptiveValue = (property, startSize, minSize) => {
    const addSize = startSize - minSize;
    return `
		${property}: ${startSize}px;
		@media (max-width: 1440px) {
			${property}: calc(${minSize}px + ${addSize} * ((100vw - 420px) / (1440 - 420)));
		}
`;
};

