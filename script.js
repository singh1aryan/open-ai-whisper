const whisper = 'https://api.openai.com/v1/audio/transcriptions';
const model = 'whisper-1';

async function callWhisper() {
    const fileInput = document.querySelector('input[type="file"]'); // or provide file path here

    const formData = new FormData();
    formData.append('model', model);
    formData.append('file', fileInput.files[0], fileInput.files[0].name);

    console.log(formData.values);
    try {
        const response = await fetch(whisper, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            body: formData
        });

        const data = await response.json();
        console.log(data);
        document.getElementById("response").innerHTML = data.text;

        callOpenAPI(data.text);
    } catch (error) {
        console.error(error.message);
    }
}
