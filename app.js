const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyAw-t-e0_9Psd6z4z24G5cnBE2eFW1svR4");

// // ...

// // The Gemini 1.5 models are versatile and work with most use cases
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// // ...
// console.log('model',model)


// const { GoogleGenerativeAI } = require("@google/generative-ai");
        const fs = require("fs");
        const genAI = new GoogleGenerativeAI("AIzaSyAw-t-e0_9Psd6z4z24G5cnBE2eFW1svR4");

        async function run() {
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
          console.log(model)
          const result = await model.generateContent([
            "What is in this photo?",
            {inlineData: {data: Buffer.from(fs.readFileSync('./img/imagen.jpg')).toString("base64"),
            mimeType: 'image/png'}}]
          );
          console.log(result.response.text());
        }
        run();
      