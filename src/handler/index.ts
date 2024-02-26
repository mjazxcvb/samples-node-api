const message = (message: string, code: number = 200) => {
	return {
		message,
		code, 
	};
};

const Handler = {
	message,
};

export default Handler;