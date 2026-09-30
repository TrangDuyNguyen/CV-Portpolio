from flask import Flask, request, Response
from gtts import gTTS
import io

app = Flask(__name__)

@app.route('/tts', methods=['POST'])
def tts():
    text = request.json.get('text', '')
    print(f"Generating TTS for: {text}")
    try:
        tts = gTTS(text, lang='vi')
        fp = io.BytesIO()
        tts.write_to_fp(fp)
        return Response(fp.getvalue(), mimetype='audio/mpeg')
    except Exception as e:
        print(f"Error: {e}")
        return Response(str(e), status=500)

if __name__ == '__main__':
    print("Mock TTS Server running on http://127.0.0.1:8123")
    app.run(port=8123)
